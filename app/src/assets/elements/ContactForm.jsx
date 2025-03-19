import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("meoaeeda");
  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="grow flex flex-col gap-5 items-start mx-5"
    >
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          className="ml-1 rounded-md border-[var(--clf-dark)] border-2"
          id="email"
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="grid grid-cols-3 gap-4 w-full">
        <textarea
          className="ml-1 rounded-md col-span-2 col-start-1 border-[var(--clf-dark)] border-2"
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="bg-[var(--clb-accent)] rounded-md col-start-3"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
