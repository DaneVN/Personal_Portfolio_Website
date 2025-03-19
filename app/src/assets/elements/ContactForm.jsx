import React from "react";

export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/meoaeeda"
      method="POST"
      className="grow flex flex-col gap-5 items-start mx-5"
    >
      <div>
        <input
          className="rounded-md border-[var(--clf-dark)] border-2 px-2 py-1"
          id="email"
          type="email"
          name="email"
          placeholder="Your email here..."
        />
      </div>
      <div className="grid grid-cols-3 gap-4 w-full">
        <textarea
          className="rounded-md col-span-2 col-start-1 border-[var(--clf-dark)] border-2 px-2 py-1"
          name="message"
          id="message"
          placeholder="Feedback or message here..."
        />
        <button
          className="bg-[var(--clb-accent)] rounded-md col-start-3"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
