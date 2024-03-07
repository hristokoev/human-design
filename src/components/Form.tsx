/*

	Form Component using react-hook-form
	
*/

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formMessage, setFormMessage] = useState({ header: "", text: "" });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      experienceWithHumanDesign: "",
      service: "",
      birthDate: "",
      birthTime: "",
      birthCountry: "",
      birthCity: "",
      message: "",
      gdpr: false,
    },
  });

  const handleSubmitForm: SubmitHandler<any> = async (data) => {
    setLoading(true);
    await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          setFormMessage({
            header: "Děkujeme za Váš zájem!",
            text: "V nejbližší době Vás budeme kontaktovat.",
          });
        } else {
          setFormMessage({
            header: "Něco se pokazilo!",
            text: "Zkuste to prosím znovu.",
          });
        }
      })
      .then(() => {
        setLoading(false);
        setFormSubmitted(true);
      });
  };

  const watchService = watch("service");

  // Check if form was submitted
  if (formSubmitted) {
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <div className="p-16 flex flex-col justify-center items-center gap-y-4 rounded-3xl shadow-md bg-petroleum-700 text-white">
          <h2 className="text-2xl">{formMessage.header}</h2>
          <p className="text-lg text-center">{formMessage.text}</p>
        </div>
      </div>
    );
  }

  return (
    <form
      className="grow flex flex-col gap-y-8"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="grow flex flex-col gap-y-2">
          <label htmlFor="123">Jméno *</label>
          <input
            type="text"
            {...register("firstName", {
              required: "Toto pole je povinné.",
              maxLength: { value: 25, message: "Maximální délka je 25 znaků." },
            })}
            id="firstName"
            className={`input ${
              !errors.firstName?.message
                ? "border-petroleum-900"
                : "border-red-500"
            }`}
          />
          <p className="text-sm text-red-500">{errors.firstName?.message}</p>
        </div>
        <div className="grow flex flex-col gap-y-2">
          <label htmlFor="lastName">Příjmení *</label>
          <input
            type="text"
            {...register("lastName", {
              required: "Toto pole je povinné.",
              maxLength: { value: 25, message: "Maximální délka je 25 znaků." },
            })}
            id="lastName"
            className={`input ${
              !errors.lastName?.message
                ? "border-petroleum-900"
                : "border-red-500"
            }`}
          />
          <p className="text-sm text-red-500">{errors.lastName?.message}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <div className="grow flex flex-col gap-y-2">
          <label htmlFor="email">Email *</label>
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
            className={`input ${
              !errors.email?.message ? "border-petroleum-900" : "border-red-500"
            }`}
          />
          <p className="text-sm text-red-500">{errors.email?.message}</p>
        </div>
        <div className="grow flex flex-col gap-y-2">
          <label htmlFor="phone">Telefon</label>
          <input
            type="tel"
            {...register("phone", {
              maxLength: { value: 20, message: "Maximální délka je 20 znaků." },
            })}
            id="phone"
            className={`input ${
              !errors.phone?.message ? "border-petroleum-900" : "border-red-500"
            }`}
          />
          <p className="text-sm text-red-500">{errors.phone?.message}</p>
        </div>
      </div>

      <div className="flex flex-col gap-y-2">
        <label htmlFor="service">Jakou službu poptáváte? *</label>
        <select
          {...register("service", { required: "Prosím vyberte." })}
          id="service"
          className={`grow input ${
            !errors.service?.message ? "border-petroleum-900" : "border-red-500"
          }`}
        >
          <option value="Nic" disabled>
            Vyberte
          </option>
          <option value="HD konzultace pro jednotlivce">
            HD konzultace pro jednotlivce
          </option>
          <option value="HD konzultace pro dvojice">
            HD konzultace pro dvojice
          </option>
          <option value="Balíček služeb">Balíček služeb</option>
          <option value="Přednáška">Přednáška</option>
          <option value="Workshop pro týmy">Workshop pro týmy</option>
          <option value="Koučink">Koučink</option>
          <option value="Manažerská supervize">Manažerská supervize</option>
          <option value="Jiné">Jiné</option>
        </select>
        <p className="text-sm text-red-500">{errors.service?.message}</p>
      </div>

      {watchService &&
        (watchService == "HD konzultace pro jednotlivce" ||
          watchService == "HD konzultace pro dvojice" ||
          watchService == "Balíček služeb") && (
          <>
            <div className="flex flex-col gap-6">
              <span>
                Máte již zkušenost s{" "}
                <span className="text-gold-400 font-bold">Human Designem</span>
                &nbsp;* ?
              </span>
              <div className="grow flex">
                <div className="space-x-4">
                  <input
                    type="radio"
                    {...register("experienceWithHumanDesign", {
                      required: "Prosím vyberte.",
                    })}
                    id="experienceTrue"
                    value="Ano, mám!"
                  />
                  <label htmlFor="experienceTrue">Ano, mám!</label>
                </div>
                <div className="ml-16 space-x-4">
                  <input
                    type="radio"
                    {...register("experienceWithHumanDesign", {
                      required: "Prosím vyberte.",
                    })}
                    id="experienceFalse"
                    value="Ne, nemám."
                  />
                  <label htmlFor="experienceFalse">Ne, nemám.</label>
                </div>
              </div>
              <p className="text-sm text-red-500">
                {errors.experienceWithHumanDesign?.message}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="grow flex flex-col gap-y-2">
                <label htmlFor="birthDate">Datum narození *</label>
                <input
                  {...register("birthDate", { required: "Prosím vyplňte." })}
                  id="birthDate"
                  className={`input ${
                    !errors.birthDate?.message
                      ? "border-petroleum-900"
                      : "border-red-500"
                  }`}
                />
                <p className="text-sm text-red-500">
                  {errors.birthDate?.message}
                </p>
              </div>
              <div className="grow flex flex-col gap-y-2">
                <label htmlFor="birthTime">Čas narození *</label>
                <input
                  {...register("birthTime", { required: "Prosím vyplňte." })}
                  id="birthTime"
                  className={`input ${
                    !errors.birthTime?.message
                      ? "border-petroleum-900"
                      : "border-red-500"
                  }`}
                />
                <p className="text-sm text-red-500">
                  {errors.birthTime?.message}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="grow flex flex-col gap-y-2">
                <label htmlFor="birtCountry">
                  Země, kde jste se narodili *
                </label>
                <input
                  {...register("birthCountry", { required: "Prosím vyplňte." })}
                  id="birtCountry"
                  className={`input ${
                    !errors.birthCountry?.message
                      ? "border-petroleum-900"
                      : "border-red-500"
                  }`}
                />
                <p className="text-sm text-red-500">
                  {errors.birthCountry?.message}
                </p>
              </div>
              <div className="grow flex flex-col gap-y-2">
                <label htmlFor="birthCity">Město, kde jste se narodili *</label>
                <input
                  {...register("birthCity", { required: "Prosím vyplňte." })}
                  id="birthCity"
                  className={`input ${
                    !errors.birthCity?.message
                      ? "border-petroleum-900"
                      : "border-red-500"
                  }`}
                />
                <p className="text-sm text-red-500">
                  {errors.birthCity?.message}
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-2">
              <span>
                Proč tyto informace potřebujeme?{" "}
                <a href="#" className="underline hover:no-underline">
                  Zjistit více
                </a>
                .
              </span>
            </div>
          </>
        )}

      <div className="flex flex-col gap-y-2">
        <label htmlFor="message">Zpráva *</label>
        <textarea
          {...register("message", {
            required: "Toto pole je povinné.",
            maxLength: { value: 500, message: "Maximální délka je 500 znaků." },
          })}
          rows={10}
          id="message"
          className={`input ${
            !errors.message?.message ? "border-petroleum-900" : "border-red-500"
          }`}
        ></textarea>
        <p className="text-sm text-red-500">{errors.message?.message}</p>
      </div>

      <div className="flex flex-col justify-center items-center gap-y-2">
        <div className="flex items-center gap-x-2">
          <input
            {...register("gdpr", {
              required:
                "Musíte souhlasit s použitím a zpracováním osobních údajů.",
            })}
            type="checkbox"
            id="gdpr"
            className="mr-2 w-4 h-4 cursor-pointer"
          />
          <span>
            Souhlasím s{" "}
            <a href="#" className="underline hover:no-underline">
              Použití a zpracování osobních údajů
            </a>
          </span>
        </div>
        <p className="text-sm text-red-500">{errors.gdpr?.message}</p>
      </div>

      <div className="flex justify-center">
        <button
          className={`btn text-white ${
            !loading
              ? "bg-petroleum-900 hover:bg-petroleum-700"
              : "bg-petroleum-300 cursor-not-allowed"
          } border-transparent`}
          type="submit"
          disabled={loading}
        >
          {loading && (
            <div role="status" className="mr-2">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-200 animate-spin fill-petroleum-300"
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
          {loading ? "Odesílání..." : "Odeslat"}
        </button>
      </div>
    </form>
  );
}
