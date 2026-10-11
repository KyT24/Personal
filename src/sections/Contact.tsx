import { useState } from "react";
import type { FormEvent } from "react";
import SectionTitle from "../components/SectionTitle";

const inputClass =
  "w-full rounded-lg border border-line bg-panel px-4 py-3 focus:border-karma focus:outline-none";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setError("Please fill in all fields.");
      return;
    }
    if (email.indexOf("@") === -1) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/" + import.meta.env.VITE_FORMSPREE_ID, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: name, email: email, message: message }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20">
      <SectionTitle title="Contact Me" />

      <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm">
        <a href="mailto:you@email.com" className="rounded-md bg-panel px-4 py-2 hover:text-karma">
          fusexer@email.com
        </a>
        <span className="rounded-md bg-panel px-4 py-2">Jakarta, Indonesia</span>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm">Name</label>
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm">Email</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm">Message</label>
          <textarea id="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className={inputClass} />
        </div>

        {error !== "" && <p role="alert" className="text-red-500">{error}</p>}
        {status === "success" && <p role="status" className="text-green-500">Message sent. Thank you!</p>}
        {status === "error" && <p role="alert" className="text-red-500">Something went wrong. Please try again.</p>}

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-md bg-karma px-6 py-3 font-medium text-on-karma hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className="mt-8 flex justify-center gap-6 text-sm">
        <a href="https://github.com/KyT24" target="_blank" rel="noopener noreferrer" className="text-karma hover:underline">GitHub</a>
        <a href="https://www.linkedin.com/in/hadev-kytra-95a77943b/" target="_blank" rel="noopener noreferrer" className="text-karma hover:underline">LinkedIn</a>
      </div>
    </section>
  );
}