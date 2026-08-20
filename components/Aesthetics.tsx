import Image from "next/image";

const aestheticsWorks = [
  {
    src: "/images/unhas/estetica-equipa.jpeg",
    alt: "Equipa Hair by Daniela Santos no salão",
    className: "col-span-2 row-span-2 md:col-span-7 md:row-span-2",
    position: "center 28%",
  },
  {
    src: "/images/unhas/unhas-brancas.jpeg",
    alt: "Unhas brancas com acabamento elegante",
    className: "md:col-span-5",
    position: "center 58%",
  },
  {
    src: "/images/unhas/unhas-bordeaux.jpeg",
    alt: "Unhas em tom bordeaux com detalhe decorativo",
    className: "md:col-span-5",
    position: "center 62%",
  },
  {
    src: "/images/unhas/unhas-francesinha.jpeg",
    alt: "Unhas com francesinha e detalhes dourados",
    className: "md:col-span-6",
    position: "center 48%",
  },
  {
    src: "/images/unhas/maquilhagem.jpeg",
    alt: "Trabalho de maquilhagem em tons neutros",
    className: "md:col-span-6",
    position: "center 55%",
  },
];

export default function Aesthetics() {
  return (
    <section id="estetica" className="bg-[#f3e8e4] px-5 py-12 md:px-6 md:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#bd7488] md:text-xs">
            Área de estética
          </p>

          <h2 className="mt-3 max-w-lg font-serif text-3xl leading-tight text-[#2a201c] md:mt-4 md:text-5xl">
            Cuidado e beleza com a <span className="italic text-[#c67b91]">Fátima</span>
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-6 text-[#6e625d] md:mt-6 md:text-base md:leading-7">
            A Hair by Daniela Santos conta também com uma área dedicada à estética, acompanhada pela Fátima, esteticista e cosmetologista.
          </p>

          <p className="mt-3 max-w-lg text-sm leading-6 text-[#6e625d] md:mt-4 md:text-base md:leading-7">
            Um espaço pensado para cuidar de cada detalhe com atenção, técnica e um atendimento personalizado.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 md:mt-8">
            {['Estética', 'Unhas', 'Maquilhagem'].map((item) => (
              <span
                key={item}
                className="border border-[#d9b4bf] bg-white/60 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#a96176]"
              >
                {item}
              </span>
            ))}
          </div>

          <a
            href="#contacto"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-[#c67b91] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#b66f84] md:mt-8 md:px-7 md:text-xs"
          >
            Falar connosco
          </a>
        </div>

        <div className="grid auto-rows-[145px] grid-cols-2 gap-2 md:auto-rows-[190px] md:grid-cols-12 md:gap-3">
          {aestheticsWorks.map((work) => (
            <figure
              key={work.src}
              className={`group relative overflow-hidden bg-[#e5d5cf] ${work.className}`}
            >
              <Image
                src={work.src}
                alt={work.alt}
                fill
                sizes="(max-width: 767px) 50vw, (max-width: 1024px) 33vw, 45vw"
                style={{ objectPosition: work.position }}
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.025] group-hover:brightness-[0.96]"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
