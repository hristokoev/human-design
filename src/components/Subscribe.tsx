import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

export default function Subsctibe() {
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formMessage, setFormMessage] = useState({ header: "", text: "" });
  const [formStatus, setFormStatus] = useState<"success" | "error" | "">("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const handleSubmitForm: SubmitHandler<any> = async (data) => {
    setLoading(true);
    await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          setFormMessage({
            header: "Děkujeme za odběr!",
            text: "Váš email byl úspěšně přidán k odběru.",
          });
          setFormStatus("success");
        } else {
          setFormMessage({
            header: "Něco se pokazilo při odběru!",
            text: "Zkuste to prosím znovu.",
          });
          setFormStatus("error");
        }
      })
      .then(() => {
        setLoading(false);
        setFormSubmitted(true);
      });
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="lg:px-4">
        <p className="font-bold">
          Přihlašte se k našemu newsletteru ať vám nic neunikne!
        </p>
        <p>Nezahltíme vaši schránku, posíláme jen občasně</p>
      </div>

      <div className={`p-4 ${formSubmitted && "bg-petroleum-900"} rounded-md`}>
        {!formSubmitted ? (
          <form
            className="flex flex-col sm:flex-row gap-4"
            onSubmit={handleSubmit(handleSubmitForm)}
          >
            <input
              type="email"
              {...register("email", {
                required: "Toto pole je povinné.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Prosím zadejte platný email.",
                },
              })}
              id="email"
              placeholder="Zadejte váš email!"
              className={`w-full px-4 py-2 bg-transparent border ${
                !errors.email?.message ? "border-white" : "border-red-500"
              } focus:outline-none`}
            />
            <button
              className={`flex px-4 py-2 border ${
                !loading
                  ? "border-white hover:bg-white hover:text-petroleum-900"
                  : "cursor-not-allowed"
              } transition-all duration-150 ease-in-out`}
              type="submit"
              disabled={loading}
            >
              {loading && (
                <div role="status" className="mr-3">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-6 text-gray-200 animate-spin fill-petroleum-300"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Odesílání...</span>
                </div>
              )}
              {loading ? "Odesílání..." : "Odebírat"}
            </button>
          </form>
        ) : (
          <div className="flex justify-between text-white">
            <div className="flex flex-col">
              <span className="">{formMessage.header}</span>
              <span className="text-sm">{formMessage.text}</span>
            </div>
            {formStatus === "error" && (
              <button
                className="px-4 py-2 border border-white hover:bg-white hover:text-petroleum-900 transition-all duration-150 ease-in-out"
                onClick={() => setFormSubmitted(false)}
              >
                Zkusit znovu
              </button>
            )}
          </div>
        )}
      </div>

      <small className="lg:px-4">
        Kliknutím na “Odebírat” souhlasíte s našimi{" "}
        <a href="/gdpr" className="underline hover:no-underline">
          Zásady ochrany osobních údajů
        </a>
      </small>
    </div>
  );
}
