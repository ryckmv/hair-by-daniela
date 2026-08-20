import Image from "next/image";

export default function Bridal() {
  return (
    <section
      id="noivas"
      className="bg-[#f3e8e4] px-5 py-10 md:px-6 md:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-6 md:gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-12">
        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#bd7488] md:mb-5 md:text-xs">
            Bridal Hair
          </p>

          <h2 className="max-w-md font-serif text-3xl leading-[1.05] text-[#2a201c] md:text-5xl lg:text-6xl">
            O seu dia.
            <br />
            O seu cabelo.
            <br />
            <span className="italic text-[#c67b91]">A sua história.</span>
          </h2>

          <p className="mt-4 max-w-md text-sm leading-6 text-[#6e625d] md:mt-7 md:text-base md:leading-7">
            Um acompanhamento personalizado para criar um penteado que combine
            consigo, com o vestido e com cada detalhe do seu dia.
          </p>

          <a
            href="#contacto"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md border border-[#c67b91] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#b86f83] transition hover:bg-[#c67b91] hover:text-white md:mt-9 md:px-7 md:py-4 md:text-xs md:tracking-[0.14em]"
          >
            Falar sobre o meu casamento
          </a>
        </div>

        <div className="grid grid-cols-3 gap-1.5 md:gap-2.5">
          <div className="group relative h-[195px] overflow-hidden rounded-sm sm:h-[240px] md:h-[460px] md:translate-y-6">
            <Image
              src="/images/bridal-1.jpg"
              alt="Penteado de noiva Hair by Daniela Santos"
              fill
              sizes="(max-width: 767px) 33vw, 33vw"
              className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.025] group-hover:brightness-[0.97]"
            />
          </div>

          <div className="group relative h-[195px] overflow-hidden rounded-sm sm:h-[240px] md:h-[460px]">
            <Image
              src="/images/bridal-2.jpg"
              alt="Bridal Hair Hair by Daniela Santos"
              fill
              sizes="(max-width: 767px) 33vw, 33vw"
              className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.025] group-hover:brightness-[0.97]"
            />
          </div>

          <div className="group relative h-[195px] overflow-hidden rounded-sm sm:h-[240px] md:h-[460px] md:translate-y-6">
            <Image
              src="/images/bridal-3.jpg"
              alt="Penteado profissional de noiva"
              fill
              sizes="(max-width: 767px) 33vw, 33vw"
              className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.025] group-hover:brightness-[0.97]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
