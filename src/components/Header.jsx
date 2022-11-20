import React from "react";
import { RiMenu5Line } from "react-icons/ri";

function Header() {
  return (
    <div className="flex h-[8rem] w-full items-center justify-between px-10 py-4 md:px-2 xs:px-4">
      <a
        href="##"
        className="ml-[6rem] text-5xl font-bold sm:ml-4  md:text-4xl lg:ml-[3rem] xs:ml-0 xs:text-2xl"
      >
        Cars
      </a>
      <nav className="sm:hidden">
        <ul className="flex cursor-pointer  items-center justify-center space-x-10 text-2xl font-semibold md:text-lg">
          <li className="origin-center border-whiteColor py-4 hover:border-b">
            Design
          </li>
          <li className="origin-center border-whiteColor py-4 hover:border-b">
            Vehicles
          </li>
          <li className="origin-center border-whiteColor py-4 hover:border-b">
            Exclusive
          </li>
          <li className="origin-center border-whiteColor py-4 hover:border-b">
            Innovation
          </li>
          <li className="origin-center border-whiteColor py-4 hover:border-b">
            Wanna hear podcast?
          </li>
        </ul>
      </nav>
      <div className="mr-16 mt-2 flex items-center space-x-8 sm:mr-4 xs:mr-2 xs:space-x-2">
        <button
          type="button"
          className="border border-whiteColor px-10 py-4 text-2xl font-semibold md:px-8 md:py-3 md:text-xl xs:px-4 xs:text-base "
        >
          Sign Up
        </button>

        <RiMenu5Line size={44} className="hidden sm:inline-block" />
      </div>
    </div>
  );
}

export default Header;
