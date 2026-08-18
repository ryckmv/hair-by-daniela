import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#181210] px-6 py-3 text-white lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-[9px] uppercase tracking-[0.14em] text-white/50 sm:flex-row">
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
