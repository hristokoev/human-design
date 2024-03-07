/*

	This component is a CTA (call to action) section with a button to the eshop.
	urrently it's not used anywhere.

	ODO: Animate the background - rotate the gradient or make it move.

*/

import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";

export default function Cta() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold text-petroleum-900"
                  >
                    Již brzy!
                  </Dialog.Title>

                  <div className="mt-4">
                    <p className="text-sm text-gray-500">
                      E-shop je momentálně ve vývoji. Budeme vás informovat, až
                      bude připraven.
                    </p>
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

      <section className="bg-[linear-gradient(125deg,theme(colors.gold.300),theme(colors.gold.400),theme(colors.gold.300),theme(colors.gold.400),theme(colors.gold.600))] bg-[length:100%_auto];">
        <div className="container">
          <div className="py-24">
            <div className="flex flex-col justify-center gap-y-12 text-center">
              <h2 className="text-6xl font-bold">Zaujal vás Human Design?</h2>

              <p className="text-xl">
                Navštivte náš eshop! Můžete si vybrat z webinářů, fyzických
                produktů, ...
              </p>

              <div className="w-48 mx-auto">
                <button
                  className="w-full btn hover:bg-white/10 shadow-2xl shadow-gold-900/50"
                  onClick={openModal}
                >
                  E-shop
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
