import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[720px] overflow-hidden bg-[#16110f] md:min-h-[760px] lg:min-h-screen"
    >
      <Image
        src="/images/tamble.png"
        alt="Trabalho de cabelo Hair by Daniela Santos"
        fill
        priority
        sizes="100vw"
        loading="eager"
        className="object-cover object-[62%_30%] md:object-[64%_30%] lg:object-[66%_32%]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#120d0b]/95 via-[#120d0b]/75 to-[#120d0b]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15" />

      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 pb-10 pt-32 md:min-h-[760px] md:px-6 md:pb-16 md:pt-32 lg:min-h-screen lg:px-10">
        <div className="w-full max-w-xl md:max-w-2xl">
          <div className="mb-6 flex items-center gap-3 md:mb-7 md:gap-4">
            <span className="h-px w-8 bg-[#d98da3] md:w-10" />

            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#e9b5c3] md:text-xs">
              Hair by Daniela Santos
            </p>
          </div>

          <h1 className="max-w-[340px] font-serif text-[38px] leading-[1.06] text-white sm:max-w-md sm:text-[44px] md:max-w-xl md:text-6xl lg:text-[76px]">
            Realçamos
            <br />
            a <span className="italic text-[#d98da3]">beleza</span> que
            <br />
            já existe em si.
          </h1>

          <p className="mt-6 max-w-[340px] text-[15px] leading-7 text-white/78 sm:max-w-md md:mt-7 md:max-w-lg md:text-lg md:leading-7">
            Especialistas em Balayage, Loiros e Bridal Hair, com um serviço
            pensado para valorizar a sua beleza e o seu estilo.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:max-w-[340px] md:mt-9 md:max-w-none md:flex-row md:gap-4">
            <a
              href="#marcacao"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#c67b91] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#b66f84] md:px-7 md:py-4 md:text-xs md:tracking-[0.14em]"
            >
              Marcar horário
            </a>

            <Link
              href="#servicos"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/45 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#18110e] md:px-7 md:py-4 md:text-xs md:tracking-[0.14em]"
            >
              Conhecer serviços
            </Link>
          </div>

          <div className="mt-8 flex max-w-[340px] items-start gap-3 text-[12px] leading-5 text-white/75 md:mt-12 md:max-w-none md:items-center md:text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0 text-[#e0a0b2] md:mt-0"
            >
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            <span>Rua da Alegria nº 304 · Vila do Conde</span>
          </div>
        </div>
      </div>
    </section>
  );
}