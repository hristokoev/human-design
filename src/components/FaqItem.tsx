/*

	FAQ Item Component

*/

import { useState, useEffect } from "react";

export interface FaqItemProps {
  question: string;
  answer: string;
  id: string;
  active?: boolean;
}

export default function FaqItem({
  question,
  answer,
  id,
  active = false,
}: FaqItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Set isOpen based on active prop
  useEffect(() => {
    setIsOpen(active);
  }, []);

  return (
    <li className="border-b border-petroleum-900">
      {/* Question + SVG Arrow */}
      <h4 className="py-6 font-bold">
        <button
          className="flex w-full text-left"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          aria-expanded={isOpen}
          aria-controls={`item-text-${id}`}
        >
          {question}
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`ml-auto ${isOpen && "!rotate-180"}`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.7975 17.4767C13.5563 17.7178 13.1655 17.7178 12.9244 17.4767L6.63004 11.1823C6.38894 10.9412 6.38894 10.5504 6.63004 10.3093L6.92108 10.0182C7.16218 9.7771 7.55308 9.7771 7.79419 10.0182L13.3609 15.585L18.9277 10.0182C19.1688 9.7771 19.5597 9.7771 19.8008 10.0182L20.0918 10.3093C20.3329 10.5504 20.3329 10.9412 20.0918 11.1823L13.7975 17.4767Z"
              fill="black"
            />
          </svg>
        </button>
      </h4>

      {/* Answer */}
      <div
        id={`item-text-${id}`}
        role="region"
        aria-labelledby={`item-title-${id}`}
        className={`grid text-zinc-500 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className="px-px pb-6"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
      </div>
    </li>
  );
}
