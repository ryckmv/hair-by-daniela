"use client";

import Link from "next/link";
import {
  AtSign,
  CalendarDays,
  ChevronRight,
  Heart,
  Home,
  Images,
  MapPin,
  Menu,
  Scissors,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { useState } from "react";

const instagramUrl = "https://www.instagram.com/hairbydanielasantos/";

const mobileLinks = [
  { label: "Início", href: "#inicio", icon: Home },
  { label: "Serviços", href: "#servicos", icon: Scissors },
  { label: "Estética", href: "#estetica", icon: Sparkles },
  { label: "Trabalhos", href: "#trabalhos", icon: Images },
  { label: "Noivas", href: "#noivas", icon: Heart },
  { label: "Sobre", href: "#sobre", icon: UserRound },
  { label: "Contacto", href: "#contacto", icon: MapPin },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <>
      <p className={`text-[8px] font-semibold uppercase tracking-[0.42em] ${light ? "text-[#e7b1c0]" : "text-[#bd7488]"}`}>
        Hair by
      </p>
      <p className={`mt-1 font-serif text-[21px] leading-none tracking-[0.02em] ${light ? "text-white" : "text-[#2a201c]"}`}>
        Daniela Santos
      </p>
      <div className="mt-2 flex items-center justify-center gap-2">
        <span className={`h-px w-5 ${light ? "bg-white/45" : "bg-[#c67b91]/60"}`} />
        <p className={`text-[7px] font-semibold uppercase tracking-[0.26em] ${light ? "text-white/75" : "text-[#8b7770]"}`}>
          Vila do Conde
        </p>
        <span className={`h-px w-5 ${light ? "bg-white/45" : "bg-[#c67b91]/60"}`} />
      </div>
    </>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-6 md:py-5 lg:px-10 lg:py-6">
        <div className="relative flex min-h-14 items-center justify-center lg:hidden">
          <Link href="#inicio" className="text-center">
            <Brand light />
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-[#edb2c1] transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Menu aria-hidden="true" size={23} strokeWidth={1.6} />
          </button>
        </div>

        <div className="hidden items-center justify-between gap-5 lg:flex">
          <Link href="#inicio" className="flex min-w-0 items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/35 bg-[#c67b91]/90 text-xs font-semibold tracking-widest text-white shadow-[0_5px_16px_rgba(0,0,0,0.16)]">
              HAIR
            </div>
            <div className="leading-tight">
              <p className="font-serif text-xl text-white">Hair by Daniela Santos</p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/65">Vila do Conde</p>
            </div>
          </Link>

          <nav className="flex items-center gap-7 text-xs font-medium uppercase tracking-[0.1em] text-white/85">
            <Link className="transition hover:text-white" href="#inicio">Início</Link>
            <Link className="transition hover:text-white" href="#sobre">Sobre</Link>
            <Link className="transition hover:text-white" href="#servicos">Serviços</Link>
            <Link className="transition hover:text-white" href="#estetica">Estética</Link>
            <Link className="transition hover:text-white" href="#trabalhos">Trabalhos</Link>
            <Link className="transition hover:text-white" href="#noivas">Noivas</Link>
            <Link className="transition hover:text-white" href="#contacto">Contacto</Link>
          </nav>

          <a href="#marcacao" className="rounded-md border border-white/15 bg-[#c67b91] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_6px_18px_rgba(68,33,42,0.22)] transition hover:bg-[#b66f84]">
            Marcar horário
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] overflow-y-auto bg-[linear-gradient(145deg,#fffdfb_0%,#f4e2e6_100%)] px-6 py-7 text-[#2a201c] lg:hidden">
          <div className="mx-auto flex min-h-full max-w-sm flex-col">
            <div className="relative border-b border-[#e5d2cc] pb-6 text-center">
              <Link href="#inicio" onClick={() => setIsMenuOpen(false)}>
                <Brand />
              </Link>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Fechar menu"
                className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-[#bd7488] transition hover:text-[#8e465c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c67b91]"
              >
                <X aria-hidden="true" size={23} strokeWidth={1.6} />
              </button>
            </div>

            <nav aria-label="Navegação principal" className="mt-6">
              {mobileLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex min-h-12 items-center gap-3 border-b border-[#eaded9] py-2 text-xs font-medium uppercase tracking-[0.12em] text-[#4d3b35] transition hover:border-[#d7a2b1] hover:text-[#b66f84]"
                >
                  <Icon aria-hidden="true" size={17} strokeWidth={1.5} className="text-[#c67b91]" />
                  <span>{label}</span>
                  <ChevronRight aria-hidden="true" size={16} strokeWidth={1.5} className="ml-auto text-[#c67b91]" />
                </Link>
              ))}
            </nav>

            <div className="mt-7 text-center">
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#9f777f]">Siga-nos</p>
              <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram Hair by Daniela Santos" className="mx-auto mt-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#d7a2b1] text-[#bd7488] transition hover:bg-[#f4e5e8]">
                <AtSign aria-hidden="true" size={17} strokeWidth={1.5} />
              </a>
            </div>

            <a href="#marcacao" onClick={() => setIsMenuOpen(false)} className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-[#c67b91] px-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_25px_rgba(104,45,64,0.18)] transition hover:bg-[#b66f84]">
              <CalendarDays aria-hidden="true" size={15} className="mr-2" />
              Marcar horário
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
