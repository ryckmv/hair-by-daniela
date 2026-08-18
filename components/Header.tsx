import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-10 lg:py-6">
        <div className="flex items-center justify-between gap-5">
          <Link href="#inicio" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-[#c67b91]/90 text-[10px] font-semibold tracking-widest text-white sm:h-12 sm:w-12 sm:text-xs">
              HAIR
            </div>

            <div className="min-w-0 leading-tight">
              <p className="truncate font-serif text-lg text-white sm:text-xl">
                Hair by Daniela Santos
              </p>
              <p className="text-[9px] uppercase tracking-[0.28em] text-white/65 sm:text-[10px]">
                Vila do Conde
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.1em] text-white/85 lg:flex">
            <Link className="transition hover:text-white" href="#inicio">Início</Link>
            <Link className="transition hover:text-white" href="#sobre">Sobre</Link>
            <Link className="transition hover:text-white" href="#servicos">Serviços</Link>
            <Link className="transition hover:text-white" href="#trabalhos">Trabalhos</Link>
            <Link className="transition hover:text-white" href="#noivas">Noivas</Link>
            <Link className="transition hover:text-white" href="#contacto">Contacto</Link>
          </nav>

          <a
            href="#contacto"
            className="hidden rounded-md bg-[#c67b91] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#b66f84] sm:inline-flex"
          >
            Marcar horário
          </a>
        </div>

        <nav aria-label="Navegação principal" className="mt-4 flex gap-5 overflow-x-auto border-t border-white/15 pt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80 lg:hidden">
          <Link href="#servicos">Serviços</Link>
          <Link href="#trabalhos">Trabalhos</Link>
          <Link href="#sobre">Sobre</Link>
          <Link href="#contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
