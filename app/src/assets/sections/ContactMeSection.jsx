import React from "react";
import ContactForm from "../elements/ContactForm";

export default function ContactMe({ className }) {
  return (
    <>
      {/* section 5: Contact Me */}
      <section
        id="section5"
        className={`py-4 p-1 w-full flex flex-col sm:flex-row justify-evenly gap-3 ${className}`}
      >
        <div className="flex sm:block">
          <h3 className="font-extrabold py-3">Let’s Connect!</h3>
          <p className="font-extrabold py-3">
            Let me know what you're thinking
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
