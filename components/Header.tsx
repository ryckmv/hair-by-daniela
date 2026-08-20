import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-6 md:py-5 lg:px-10 lg:py-6">
        <div className="flex items-center justify-between gap-5">
          <Link href="#inicio" className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-[#c67b91]/90 text-[10px] font-semibold tracking-widest text-white md:h-12 md:w-12 md:text-xs">
              HAIR
            </div>

            <div className="min-w-0 leading-tight">
              <p className="truncate font-serif text-base text-white md:text-xl">
                Hair by Daniela Santos
              </p>
              <p className="text-[8px] uppercase tracking-[0.22em] text-white/65 md:text-[10px] md:tracking-[0.28em]">
                Vila do Conde
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.1em] text-white/85 lg:flex">
            <Link className="transition hover:text-white" href="#inicio">Início</Link>
            <Link className="transition hover:text-white" href="#sobre">Sobre</Link>
            <Link className="transition hover:text-white" href="#servicos">Serviços</Link>
            <Link className="transition hover:text-white" href="#estetica">Estética</Link>
            <Link className="transition hover:text-white" href="#trabalhos">Trabalhos</Link>
            <Link className="transition hover:text-white" href="#noivas">Noivas</Link>
            <Link className="transition hover:text-white" href="#contacto">Contacto</Link>
          </nav>

         <a
  href="#marcacao"
  className="hidden rounded-md bg-[#c67b91] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#b66f84] md:inline-flex"
>
  Marcar horário
</a>
        </div>

        <nav aria-label="Navegação principal" className="mt-1.5 flex items-center gap-2.5 overflow-x-auto border-t border-white/15 pt-1 text-[8px] font-semibold uppercase tracking-[0.08em] text-white/80 md:mt-4 md:gap-5 md:pt-3 md:text-[10px] md:tracking-[0.12em] lg:hidden">
          <Link className="flex min-h-8 shrink-0 items-center md:min-h-0" href="#servicos">Serviços</Link>
          <Link className="flex min-h-8 shrink-0 items-center md:min-h-0" href="#estetica">Estética</Link>
          <Link className="flex min-h-8 shrink-0 items-center md:min-h-0" href="#trabalhos">Trabalhos</Link>
          <Link className="flex min-h-8 shrink-0 items-center md:min-h-0" href="#sobre">Sobre</Link>
          <Link className="flex min-h-8 shrink-0 items-center md:min-h-0" href="#contacto">Contacto</Link>
          <Link className="flex min-h-8 shrink-0 items-center rounded bg-[#c67b91] px-2.5 text-white md:hidden" href="#marcacao">Marcar horário</Link>
        </nav>
      </div>
    </header>
  );
}
