"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import RandomQuote from "@/components/RandomQuote";

function Kontakt() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Poruka poslata!");
    setFormData({ firstname: "", lastname: "", subject: "" });
  };

  return (
    <>
      <Navbar />
      <article>
        <div className="pt-[64px] lg:pt-[100px]">
          <RandomQuote />
        </div>
        <h1 className="text-center text-2xl font-bold py-6">Kontakt</h1>
<div  className="pt-20 px-4 md:max-w-xl md:mx-auto lg:max-w-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 p-4 border border-foreground rounded-lg shadow-md text-foreground bg-background "
        >
          <label htmlFor="firstname" className="font-medium">
            Ime
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Unesite vaše ime..."
            className="border border-foreground rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-foreground"
            required
          />

          <label htmlFor="lastname" className="font-medium">
            Prezime
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Unesite vaše prezime..."
            className="border border-foreground rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-foreground"
            required
          />

          <label htmlFor="subject" className="font-medium">
            Tema
          </label>
          <textarea
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Recite mi šta vas muči..."
            className="border border-foreground rounded-md p-2 h-32 focus:outline-none focus:ring-2 focus:ring-foreground"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-text-primary text-background border-2 font-semibold py-2  hover:text-background hover:bg-text-secondary transition duration-300  mx-auto inline-block md:text-lg px-8  rounded-full shadow-lg"
          >
            Pošalji
          </button>
        </form>
        </div>
      </article>
    </>
  );
}

export default Kontakt;
