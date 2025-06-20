import Navbar from "@/components/Navbar";
import ImageSection from "@/components/ImageComponent";
import RandomQuote from "@/components/RandomQuote";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

const services = [
  {
    title: "Individualna psihoterapija",
    description:
      "Pružam siguran i podržavajući prostor u kojem klijenti mogu dublje istražiti svoja osećanja, misli i obrasce ponašanja, radeći na ličnom razvoju i unutrašnjem balansu.",
  },
  {
    title: "Psihološko savetovanje",
    description:
      "Kroz stručno vođene razgovore, zajedno pronalazimo načine za prevazilaženje svakodnevnih izazova i donošenje važnih životnih odluka.",
  },
  {
    title: "Porodična psihoterapija",
    description:
      "Radim sa porodicama kako bismo zajedno osnažili međusobne odnose, unapredili komunikaciju i prevazišli konflikte u porodičnoj dinamici.",
  },
  {
    title: "Bračna i psihoterapija parova",
    description:
      "Pomažem partnerima da obnove međusobnu povezanost, prevaziđu nesuglasice i razviju zdravije obrasce komunikacije i razumevanja.",
  },
  {
    title: "Dečija psihoterapija",
    description:
      "Kroz igru, razgovor i kreativne tehnike, pružam deci prostor za izražavanje emocija i podršku u razvoju emocionalne otpornosti.",
  },
  {
    title: "Online savetovanje",
    description:
      "Omogućavam psihološku podršku na daljinu, dostupnu iz udobnosti vašeg doma, uz potpunu diskreciju i prilagodljivost vašim potrebama.",
  },
  {
    title: "Individualno savetovanje",
    description:
      "Usmereni smo na konkretne teme i ciljeve, uz stručno vođenje ka boljem razumevanju sebe i donošenju korisnih životnih odluka.",
  },
  {
    title: "Savetodavni rad sa decom i adolescentima",
    description:
      "Pružam mladima podršku u suočavanju sa izazovima odrastanja, školskim problemima, emocionalnim teškoćama i izgradnji samopouzdanja.",
  },
  {
    title: "Porodično savetovanje",
    description:
      "Kroz otvoren i iskren dijalog, zajedno radimo na osnaživanju porodičnih veza i stvaranju podržavajuće porodične atmosfere.",
  },
];

function Psihoterapija() {
  return (
    <>
      <Navbar />

      <article>
        <div className="pt-[64px] lg:pt-[100px]">
          <RandomQuote />
        </div>

        

        {/* Glavna sekcija - tekst i slika */}
   <section className="py-10 px-6 bg-background-secondary ">
  <div
    className="mx-auto md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1800px]
      flex flex-col lg:flex-row items-start justify-center px-6 md:px-0  "
  >
     <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold text-text-primary lg:hidden mx-auto">
        Psihoterapija 
      </h1> 
      <p className="text-lg md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold text-text-primary mb-6 lg:hidden mx-auto">Put ka ličnoj promeni</p>
    {/* Slika ide prva na velikim ekranima */}
     <div className="md:w-7/10 lg:w-3/10  lg:mt-0 flex justify-end lg:p-5 md:mx-auto">
      <ImageSection
        src="/Smiljka1.jpg"
        width={500}
        height={400}
        alt="Terapija"
        className=""
      />
    </div>

    {/* Ova div grupiše h1 i tekst - na malim ekranima ispod slike, na velikim pored slike */}
    <div className="lg:w-1/2 mt-10 lg:my-auto">
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold text-text-primary mb-15 hidden lg:block">
        Psihoterapija – Put ka ličnoj promeni
      </h1>
      <p className="text-msm md:text-md lg:text-lg xl:text-xl 2xl:text-1xl mb-4">
        Dobar terapeut ne nudi gotova rešenja. Veruje da znanje i snaga već postoje u osobi koja dolazi na terapiju.
      </p>
      <p className="text-msm md:text-md lg:text-lg xl:text-xl 2xl:text-1xl mb-4">
        Kroz pažljivo vođenje i podršku, klijent otkriva sopstvene unutrašnje resurse i sposobnost da prevaziđe životne izazove.
      </p>
      <p className="text-msm md:text-md lg:text-lg xl:text-xl 2xl:text-1xl mb-4">
        Sistemski pristup pomaže da promene postignute tokom terapije utiču ne samo na pojedinca, već i na njegove bliske odnose i širu okolinu.
      </p>
      <p className="text-msm md:text-md lg:text-lg xl:text-xl 2xl:text-1xl">
        Ovakav pogled omogućava klijentima da sagledaju svoje probleme iz šire perspektive – razumevajući kako obrasci ponašanja i emocije oblikuju njihove odnose i život.
      </p>
    </div>
  </div>
</section>


        {/* Kartice za usluge */}
        <section className="px-6 py-16 bg-text-primary">
          <div className="max-w-7xl mx-auto">
            <p className="pb-10 italic font-semibold text-xl md:text-2xl text-center text-background">
              Vrste terapeutskih usluga koje pružam:
            </p>

            {services
              .reduce((rows, card, idx) => {
                const rowIndex = Math.floor(idx / 3);
                if (!rows[rowIndex]) rows[rowIndex] = [];
                rows[rowIndex].push(card);
                return rows;
              }, [])
              .map((row, rowIndex) => {
                // Rotiramo elemente u redu
                const rotatedRow = [...row];
                for (let i = 0; i < rowIndex; i++) {
                  rotatedRow.push(rotatedRow.shift());
                }

                // Definišemo boje koje se rotiraju
                const colorVariants = [
                  { bg: "bg-background-ternary", text: "text-background" },
                  { bg: "bg-text-ternary", text: "text-background-secondary" },
                  { bg: "bg-background", text: "text-text-primary" },
                ];

                return (
                  <div
                    key={rowIndex}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
                  >
                    {rotatedRow.map((service, colIndex) => {
                      const colorIndex = (colIndex + rowIndex) % 3;
                      const color = colorVariants[colorIndex];

                      return (
                        <div
                          key={`${rowIndex}-${colIndex}`}
                          className={`rounded-2xl p-6 shadow-xl hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 ease-in-out ${color.bg} ${color.text}`}
                        >
                          <h3 className="text-xl font-semibold mb-3">
                            {service.title}
                          </h3>
                          <p className="text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}

            <div className="flex justify-center mt-12 ">
              <Button
                href="/Kontakt"
                text="Zakaži konsultaciju"
                styleType="message"
              />
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </>
  );
}

export default Psihoterapija;
