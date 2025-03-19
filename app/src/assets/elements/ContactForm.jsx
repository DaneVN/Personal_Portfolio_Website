import React from "react";

export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/meoaeeda"
      method="POST"
      className="grow flex flex-col gap-5 items-start mx-5"
    >
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          className="ml-1 rounded-md border-[var(--clf-dark)] border-2"
          type="email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 w-full">
        <textarea
          className="ml-1 rounded-md col-span-2 col-start-1 border-[var(--clf-dark)] border-2"
          name="message"
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
