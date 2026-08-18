import Image from "next/image";

const works = [
  {
    src: "/images/foto-7.jpg",
    alt: "Penteado longo em tom vermelho com acessório delicado",
    className: "md:col-span-5 md:row-span-2",
    position: "center",
  },
  {
    src: "/images/foto-5.jpg",
    alt: "Cabelo loiro platinado, liso e brilhante",
    className: "md:col-span-4",
    position: "center 30%",
  },
  {
    src: "/images/foto-4.jpg",
    alt: "Cabelo ruivo acobreado com ondas e volume",
    className: "md:col-span-3",
    position: "center 35%",
  },
  {
    src: "/images/foto-1.jpg",
    alt: "Penteado semipreso com trança e ondas",
    className: "md:col-span-3",
    position: "center 28%",
  },
  {
    src: "/images/foto-12.jpg",
    alt: "Balayage com ondas e reflexos dourados",
    className: "md:col-span-4",
    position: "center 30%",
  },
];

export default function Works() {
  return (
    <section id="trabalhos" className="bg-[#fffdfb] px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#bd7488]">
              Portefólio
            </p>
            <h2 className="mt-4 font-serif text-4xl text-[#2a201c] sm:text-5xl">
              Trabalhos com <span className="italic text-[#c67b91]">assinatura</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#766963] sm:text-base">
            Cor, textura e detalhe em resultados pensados para valorizar cada pessoa.
          </p>
        </div>

        <div className="grid auto-rows-[230px] grid-cols-2 gap-2.5 md:grid-cols-12 md:auto-rows-[250px] md:gap-3">
          {works.map((work, index) => (
            <figure
              key={work.src}
              className={`group relative overflow-hidden bg-[#eadfda] ${work.className} ${index === 0 ? "col-span-2" : "col-span-1"}`}
            >
              <Image
                src={work.src}
                alt={work.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 42vw"
                style={{ objectPosition: work.position }}
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.025] group-hover:brightness-[0.94]"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
