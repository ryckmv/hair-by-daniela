import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#181210] px-3 py-2 text-white md:px-6 md:py-3 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[8px] uppercase tracking-[0.1em] text-white/50 md:flex-nowrap md:justify-between md:gap-2 md:text-[9px] md:tracking-[0.14em]">
        <Link
          href="#inicio"
          className="font-serif text-xs normal-case tracking-normal text-white/85 transition hover:text-white"
        >
          Hair by Daniela Santos
        </Link>

        <p>Vila do Conde</p>

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/hairbydanielasantos/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            Instagram
          </a>
          <span aria-hidden="true" className="text-[#c67b91]">
            ·
          </span>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
