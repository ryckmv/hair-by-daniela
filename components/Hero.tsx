import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

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

      <div className="absolute inset-0 bg-gradient-to-r from-[#120d0b]/90 via-[#120d0b]/45 to-[#120d0b]/20 md:from-[#120d0b]/95 md:via-[#120d0b]/75 md:to-[#120d0b]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15" />

      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 pb-10 pt-32 md:min-h-[760px] md:px-6 md:pb-16 md:pt-32 lg:min-h-screen lg:px-10">
        <div className="w-full max-w-xl md:max-w-2xl">
          <div className="mb-6 hidden items-center gap-3 md:mb-7 md:flex md:gap-4">
            <span className="h-px w-8 bg-[#d98da3] md:w-10" />

            <p className="text-[10px] font-medium uppercase tracking-[0.24  em] text-[#e9b5c3] md:text-xs">
              Hair by Daniela Santos
            </p>
          </div>

          <h1 className="-translate-y-4 max-w-[205px] font-serif text-[34px] leading-[1.20] text-white sm:max-w-[230px] sm:text-[38px] md:max-w-xl md:text-6xl lg:text-[76px] md:translate-y-6">
            <span className="block">Realçamos</span>
            <span className="mt-2 block md:mt-0">
              a <span className="italic text-[#d98da3]">beleza</span> que
            </span>
            <span className="mt-2 block md:mt-0">já existe em si.</span>
          </h1>

          <p className="mt-6 max-w-[205px] text-[9px] font-semibold uppercase leading-5 tracking-[0.18em] text-white/80 sm:max-w-[230px] md:mt-7 md:max-w-lg md:text-sm md:leading-7 md:tracking-[0.16em]">
            <span className="block md:inline">Exclusividade</span>
            <span className="hidden md:inline"> · </span>
            <span className="block md:inline">Cuidado</span>
            <span className="hidden md:inline"> · </span>
            <span className="block md:inline">Excelência</span>
          </p>

          <div className="mx-auto mt-8 flex max-w-[205px] flex-col gap-3 sm:max-w-[230px] md:mx-0 md:mt-9 md:max-w-none md:flex-row md:gap-4">
            <a
              href="#marcacao"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#c67b91] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#b66f84] md:px-7 md:py-4 md:text-xs md:tracking-[0.14em]"
            >
              <CalendarDays aria-hidden="true" size={15} className="mr-2" />
              Marcar horário
            </a>

            <Link
              href="#servicos"
              className="hidden min-h-12 items-center justify-center rounded-md border border-white/45 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#18110e] md:inline-flex md:px-7 md:py-4 md:text-xs md:tracking-[0.14em]"
            >
              Conhecer serviços
            </Link>
          </div>

          <div className="mt-8 hidden max-w-[340px] items-start gap-3 text-[12px] leading-5 text-white/75 md:mt-12 md:flex md:max-w-none md:items-center md:text-sm">
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
