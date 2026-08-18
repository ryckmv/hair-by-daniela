import Image from "next/image";

export default function Bridal() {
  return (
    <section
      id="noivas"
      className="bg-[#f3e8e4] px-6 py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-12">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#bd7488]">
            Bridal Hair
          </p>

          <h2 className="max-w-md font-serif text-4xl leading-[1.05] text-[#2a201c] sm:text-5xl lg:text-6xl">
            O seu dia.
            <br />
            O seu cabelo.
            <br />
            <span className="italic text-[#c67b91]">A sua história.</span>
          </h2>

          <p className="mt-7 max-w-md text-base leading-7 text-[#6e625d]">
            Um acompanhamento personalizado para criar um penteado que combine
            consigo, com o vestido e com cada detalhe do seu dia.
          </p>

          <a
            href="#contacto"
            className="mt-9 inline-flex items-center justify-center rounded-md border border-[#c67b91] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#b86f83] transition hover:bg-[#c67b91] hover:text-white"
          >
            Falar sobre o meu casamento
          </a>
        </div>

        <div className="grid gap-2.5 sm:grid-cols-3">
          <div className="relative h-[390px] overflow-hidden rounded-sm sm:h-[460px] sm:translate-y-6">
            <Image
              src="/images/bridal-1.jpg"
              alt="Penteado de noiva Hair by Daniela Santos"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover object-top"
            />
          </div>

          <div className="relative h-[390px] overflow-hidden rounded-sm sm:h-[460px]">
            <Image
              src="/images/bridal-2.jpg"
              alt="Bridal Hair Hair by Daniela Santos"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover object-top"
            />
          </div>

          <div className="relative h-[390px] overflow-hidden rounded-sm sm:h-[460px] sm:translate-y-6">
            <Image
              src="/images/bridal-3.jpg"
              alt="Penteado profissional de noiva"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
