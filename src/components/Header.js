import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="px-4 py-1 text-2xl flex justify-between bg-secondary">
      <h3 className="font-bold text-black ">Dinesh Thanigaivel</h3>
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className="md:hidden block ">
          <ul className="mobile-nav flex flex-col text-white">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      )}

      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="md:hidden block"
      >
        <Bars3Icon className="text-white h-5" />
      </button>
    </header>
  );
}
