import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center p-10  w-full">
      <div className="flex gap-10">
        <a
          href="https://github.com/DaneVN"
          className="bg-[var(--clb-accent)] active:bg-[var(--clb-lighter)] hover:scale-120 transition-all rounded-full"
          target="_blank"
        >
          <img src="/assets/GitHub.svg" alt="GitHub Account" width={40} />
        </a>
        <a
          href="www.linkedin.com/in/dane-van-niekerk-8a1982317"
          className="bg-[var(--clb-accent)] active:bg-[var(--clb-lighter)] hover:scale-120 transition-all rounded-2xl"
          target="_blank"
        >
          <img src="/assets/LinkedIn.png" alt="LinkedIn Account" width={40} />
        </a>
        <a
          href="tel:0810314325"
          className="bg-[var(--clb-accent)] active:bg-[var(--clb-lighter)] hover:scale-120 transition-all rounded-full"
          target="_blank"
        >
          <img src="/assets/Phone.svg" alt="Phone" width={40} />
        </a>
        <a
          href="mailto:Dane.vN23@gmail.com"
          className="bg-[var(--clb-accent)] active:bg-[var(--clb-lighter)] hover:scale-120 transition-all rounded-full"
          target="_blank"
        >
          <img src="/assets/Email.svg" alt="Email" width={40} />
        </a>
      </div>

      <div className="text-xs md:text-lg flex gap-10 mt-2">
        <p>
          created by <span className="font-bold"> Dané van Niekerk </span>
        </p>
        <p>
          Last Update: <span>24 March 2025</span>
        </p>
      </div>
    </footer>
  );
}
