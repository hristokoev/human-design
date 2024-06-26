/*

	Review Card Component
	
*/

import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { useState, Fragment } from "react";

import type ReviewItemProps from "@/interfaces/ReviewItem";

export default function ReviewItem({
  name,
  title,
  text,
  perex,
  serviceText,
  serviceUrl,
}: ReviewItemProps) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // Animation variants (hidden and show) for the Motion element
  const item = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        ease: "easeInOut",
        bounce: 0.4,
      },
    },
  };

  return (
    <>
      {/* Modal Window */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2">
                    <div
                      className="text-sm text-gray-500"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="btn bg-petroleum-900 hover:bg-petroleum-700"
                      onClick={closeModal}
                    >
                      Zavřít
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <motion.div
        className="mb-8 flex flex-col gap-y-4 card-review"
        variants={item}
      >
        {/* Service */}
        {serviceText && serviceUrl && (
          <div className="flex font-bold">
            <a href={serviceUrl} className="text-gold-400 hover:underline">
              {serviceText}
            </a>
          </div>
        )}

        {/* Text */}
        <div className="grow">
          <p className="text-sm">
            {perex}
            &nbsp;
            <button
              className="text-gold-400 hover:underline"
              onClick={openModal}
            >
              Zobrazit více
            </button>
          </p>
        </div>

        {/* Reviewer */}
        <div className="flex flex-col">
          <span className="font-bold">{name}</span>
          <span>{title}</span>
        </div>
      </motion.div>
    </>
  );
}
