/*

	Mobile Menu Component

*/

import { Transition } from "@headlessui/react";
import { useState, useEffect, useRef } from "react";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // Close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  return (
    <nav className="w-full md:hidden">
      {/* Hamburger */}
      <div className="absolute top-8 right-12 flex md:hidden">
        <button
          ref={trigger}
          className={`${mobileNavOpen && "active"}`}
          aria-controls="mobile-nav"
          aria-expanded={mobileNavOpen}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="w-6 h-6 fill-current text-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="4" width="24" height="2" />
            <rect y="11" width="24" height="2" />
            <rect y="18" width="24" height="2" />
          </svg>
        </button>
      </div>

      {/* Menu */}
      <div
        ref={mobileNav}
        className="bg-gradient-to-b from-black/25 border-y border-y-petroleum-900/50"
      >
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          enter="transition-all duration-300"
          enterFrom="opacity-0 -translate-y-6"
          enterTo="opacity-100 translate-y-0"
          className="py-2 text-white md:hidden"
        >
          <ul className="flex flex-col divide-y divide-petroleum-900/25 text-lg text-center">
            <li className="py-2">
              <a
                href="/"
                className="hover:text-gold-400 transition-all duration-150 ease-in-out"
              >
                Domů
              </a>
            </li>
            <li className="py-2">
              <a
                href="/#sluzby"
                onClick={() => setMobileNavOpen(false)}
                className="hover:text-gold-400 transition-all duration-150 ease-in-out"
              >
                Služby
              </a>
            </li>
            <li className="py-2">
              <a
                href="/o-nas"
                className="hover:text-gold-400 transition-all duration-150 ease-in-out"
              >
                O Nás
              </a>
            </li>
            <li className="py-2">
              <a
                href="/blog/1"
                className="hover:text-gold-400 transition-all duration-150 ease-in-out"
              >
                Blog
              </a>
            </li>
            <li className="py-2">
              <a
                href="/kontakt"
                className="hover:text-gold-400 transition-all duration-150 ease-in-out"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </Transition>
      </div>
    </nav>
  );
}
