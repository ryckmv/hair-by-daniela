import Image from "next/image";

const works = [
  {
    src: "/images/foto-7.jpg",
    alt: "Penteado longo em tom vermelho com acessório delicado",
    className: "md:col-span-5 md:row-span-2",
     position: "center 20%",
  },
  {
    src: "/images/foto-5.jpg",
    alt: "Cabelo loiro platinado, liso e brilhante",
    className: "md:col-span-4",
    position: "center 30%",
  },
    {
    src: "/images/puxo-de-ondas-final.png",
    alt: "Puxo de ondas com movimento e acabamento definido",
    className: "md:col-span-3",
    position: "center 55%",
    contain: false,
    
  },

  {
    src: "/images/foto-1.png",
    alt: "Penteado semipreso com trança e ondas",
    className: "md:col-span-3",
    position: "center 28%",
  },
  {
    src: "/images/foto-12.jpg",
    alt: "Balayage com ondas e reflexos dourados",
    className: "md:col-span-2",
    position: "center 30%",
  },
    {
    src: "/images/foto-4.jpg",
    alt: "Cabelo ruivo acobreado com ondas e volume",
    className: "md:col-span-2",
    position: "center 50%",
    contain: false,
  },

];

export default function Works() {
  return (
    <section id="trabalhos" className="bg-[#fffdfb] px-4 py-12 md:px-6 md:py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex flex-col justify-between gap-3 md:mb-12 md:flex-row md:items-end md:gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#bd7488]">
              Portefólio
            </p>
            <h2 className="mt-3 font-serif text-3xl text-[#2a201c] md:mt-4 md:text-5xl">
              Trabalhos com <span className="italic text-[#c67b91]">assinatura</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#766963] sm:text-base">
            Cor, textura e detalhe em resultados pensados para valorizar cada pessoa.
          </p>
        </div>

        <div className="grid auto-rows-[165px] grid-cols-2 gap-2 md:grid-cols-12 md:auto-rows-[250px] md:gap-3">
          {works.map((work) => (
            <figure
              key={work.src}
              className={`group relative overflow-hidden bg-[#eadfda] ${work.className}`}
            >
              <Image
                src={work.src}
                alt={work.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 42vw"
                style={{ objectPosition: work.position }}
                className={`${
              work.contain
                ? "object-contain scale-[2.0] group-hover:scale-[2.28]"
                : "object-cover group-hover:scale-[1.025]"
            } transition duration-700 ease-out group-hover:brightness-[0.94]`}
                          />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
