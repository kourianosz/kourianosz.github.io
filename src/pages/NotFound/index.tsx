import { Link } from "react-router-dom";
import "./index.css";
export default function NotFound() {
  return (
    <section className="not-found container">
      <h1 className="section-heading">Page not found</h1>
      <p>The page you’re looking for isn’t here.</p>
      <Link className="button" to="/">
        Back to home
      </Link>
    </section>
  );
}
