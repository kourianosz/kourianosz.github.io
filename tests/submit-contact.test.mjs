import assert from "node:assert/strict";
import { test, afterEach, mock } from "node:test";
import { CONTACT_ENDPOINT, submitContact } from "../src/lib/submitContact.ts";

afterEach(() => mock.restoreAll());

test("posts the supplied fields to the configured Formspree form", async () => {
  const data = new FormData();
  data.set("name", "Test Sender");
  data.set("email", "test@example.com");
  data.set("message", "A mocked test message.");
  const controller = new AbortController();
  const request = mock.method(
    globalThis,
    "fetch",
    async () => new Response(null, { status: 200 }),
  );
  await submitContact(data, controller.signal);
  const [url, options] = request.mock.calls[0].arguments;
  assert.equal(url, "https://formspree.io/f/mgaelbjr");
  assert.equal(url, CONTACT_ENDPOINT);
  assert.equal(options.method, "POST");
  assert.equal(options.headers.Accept, "application/json");
  assert.equal(options.body.get("name"), "Test Sender");
  assert.equal(options.body.get("email"), "test@example.com");
  assert.equal(options.body.get("message"), "A mocked test message.");
  assert.equal(options.signal, controller.signal);
});

test("reports Formspree validation errors without consuming the submitted data", async () => {
  const data = new FormData();
  data.set("message", "Keep this draft.");
  mock.method(globalThis, "fetch", async () =>
    Response.json(
      { errors: [{ message: "Enter a valid email address." }, null] },
      { status: 422 },
    ),
  );
  await assert.rejects(submitContact(data), /Enter a valid email address/);
  assert.equal(data.get("message"), "Keep this draft.");
});

test("handles non-JSON server failures with a useful message", async () => {
  mock.method(
    globalThis,
    "fetch",
    async () => new Response("Service unavailable", { status: 503 }),
  );
  await assert.rejects(
    submitContact(new FormData()),
    /Please try again or email me directly/,
  );
});

test("handles malformed error responses", async () => {
  mock.method(globalThis, "fetch", async () =>
    Response.json({ errors: [null, { message: 42 }] }, { status: 400 }),
  );
  await assert.rejects(submitContact(new FormData()), /Please try again/);
});

test("propagates a network failure instead of reporting success", async () => {
  mock.method(globalThis, "fetch", async () => {
    throw new TypeError("Failed to fetch");
  });
  await assert.rejects(submitContact(new FormData()), /Failed to fetch/);
});
