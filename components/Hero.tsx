import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[760px] overflow-hidden bg-[#16110f] lg:min-h-screen"
    >
      <Image
        src="/images/tamble.png"
        alt="Trabalho de cabelo Hair by Daniela Santos"
        fill
        priority
        sizes="100vw"
        loading="eager"
        className="object-cover object-[58%_28%] sm:object-[64%_30%] lg:object-[66%_32%]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#120d0b]/95 via-[#120d0b]/72 to-[#120d0b]/15" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15" />

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center px-6 pb-16 pt-32 lg:min-h-screen lg:px-10">
        <div className="max-w-2xl">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-[#d98da3]" />

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#e9b5c3]">
              Hair by Daniela Santos
            </p>
          </div>

          <h1 className="max-w-xl font-serif text-5xl leading-[1.02] text-white sm:text-6xl lg:text-[76px]">
            Realçamos
            <br />
            a <span className="italic text-[#d98da3]">beleza</span> que
            <br />
            já existe em si.
          </h1>

          <p className="mt-7 max-w-lg text-base leading-7 text-white/75 sm:text-lg">
            Especialistas em Balayage, Loiros e Bridal Hair, com um serviço
            pensado para valorizar a sua beleza e o seu estilo.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
             href="#marcacao"
              className="inline-flex items-center justify-center rounded-md bg-[#c67b91] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#b66f84]"
            >
              Marcar horário
            </a>

            <Link
              href="#servicos"
              className="inline-flex items-center justify-center rounded-md border border-white/45 px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#18110e]"
            >
              Conhecer serviços
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-3 text-sm text-white/75">
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
              className="text-[#e0a0b2]"
            >
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            <span>
              Rua da Alegria nº 304 · Vila do Conde
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
