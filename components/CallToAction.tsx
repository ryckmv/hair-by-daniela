export default function CallToAction() {
  return (
    <section className="bg-[#c97d93] px-6 py-5 lg:py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 lg:flex-row">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
              <path d="M8 14h.01" />
              <path d="M12 14h.01" />
              <path d="M16 14h.01" />
            </svg>
          </div>

          <h2 className="font-serif text-3xl leading-tight text-white lg:text-[34px]">
            Pronta para o seu
            <br />
            próximo cabelo?
          </h2>
        </div>

        <p className="max-w-[280px] text-sm leading-6 text-white/85">
          Fale connosco e encontre
          <br />
          o serviço ideal para si.
        </p>

        <a
          href="#contacto"
          className="inline-flex min-w-[190px] items-center justify-center rounded-md bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#b96f84] transition hover:bg-[#f8f3f0]"
        >
          Marcar horário
        </a>
      </div>
    </section>
  );
}