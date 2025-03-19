import React from "react";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[var(--clf-offWhite)] text-[var(--clf-dark)] p-6">
      <h1 className="text-6xl font-bold">404 - Lost in the Code!</h1>
      <p className="text-2xl mt-4">
        Oops! It looks like you’ve stumbled into a digital wilderness. The page
        you’re looking for has vanished—maybe it’s off debugging itself!
      </p>
      <p className="text-lg mt-2">
        <NavLink to="/" className="text-[var(--clb-purple)] hover:underline">
          Click here to head back home!
        </NavLink>
      </p>
    </div>
  );
}
