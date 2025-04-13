import { sendForm } from "@emailjs/browser";
import { Button, Group, SimpleGrid, Textarea, TextInput } from "@mantine/core";
import { hasLength, useForm, isEmail } from "@mantine/form";
import { useRef, useState } from "react";

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitText, setSubmitText] = useState("Send message");

  const formRef = useRef(null);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: hasLength({ min: 1 }, "Name must be provided"),
      email: isEmail("Invalid email"),
      subject: hasLength({ min: 1 }, "Subject must be provided"),
      message: hasLength({ min: 1 }, "Message must be provided"),
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(() => {
        setSubmitting(true);
        setSubmitText("Sending...");

        sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_KEY,
          import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
          formRef.current,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          }
        ).then(
          () => {
            setSubmitting(false);
            setSubmitText("Message sent!");
            setTimeout(() => {
              setSubmitText("Send message");
            }, 5000);
          },
          () => {
            setSubmitting(false);
            setSubmitText("Send message");
          }
        );
      })}
      ref={formRef}
    >
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          withAsterisk
          disabled={submitting}
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          withAsterisk
          disabled={submitting}
          {...form.getInputProps("email")}
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
        withAsterisk
        disabled={submitting}
        {...form.getInputProps("subject")}
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        withAsterisk
        disabled={submitting}
        {...form.getInputProps("message")}
      />

      <Group justify="right" mt="xl">
        <Button
          type="submit"
          size="md"
          color={"var(--mantine-color-pink-5)"}
          disabled={submitting}
        >
          {submitText}
        </Button>
      </Group>
    </form>
  );
};

export default ContactForm;
