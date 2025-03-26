import React from "react";
import ContactForm from "../elements/ContactForm";

export default function ContactMe({ className }) {
  return (
    <>
      <section
        id="section5"
        className={`py-20 p-1 w-full flex flex-col sm:flex-row justify-evenly gap-3 ${className}`}
      >
        <div>
          <h3 className="font-extrabold py-3 justify-self-center sm:justify-self-start">
            Let’s Connect!
          </h3>
          <p className="font-bold py-3">Let me know what you're thinking</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
