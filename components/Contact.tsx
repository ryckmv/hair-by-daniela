import { ArrowUpRight, AtSign, Clock3, MapPin } from "lucide-react";

const instagramUrl = "https://www.instagram.com/hairbydanielasantos/";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Rua+da+Alegria+304+Vila+do+Conde+Portugal";

export default function Contact() {
  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="bg-[fffdfb] px-6 py-12 lg:px-10 lg:py-14"
    >
      <div className="mx-auto max-w-7xl overflow-hidden border border-[#dfd0ca] bg-[#fffdfb] shadow-[0_16px_45px_rgba(62,42,35,0.06)]">
        <div className="grid lg:grid-cols-[1.15fr_1fr_1fr_1fr]">
          <div className="flex items-center gap-5 border-b border-[#e7dbd6] p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-full border border-[#c67b91] text-[#a85f74]">
              <span className="text-[9px] uppercase tracking-[0.22em]">Hair</span>
              <span className="mt-0.5 h-px w-6 bg-[#c67b91]" />
              <span className="mt-1 text-[7px] uppercase tracking-[0.14em]">Daniela</span>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#bd7488]">
                Contacto
              </p>
              <h2
                id="contact-title"
                className="mt-2 font-serif text-2xl leading-tight text-[#2a201c]"
              >
                Hair by
                <br />
                Daniela Santos
              </h2>
              <p className="mt-2 text-xs leading-5 text-[#766963]">
                Beleza, técnica e atenção a cada detalhe.
              </p>
            </div>
          </div>

          <div className="border-b border-[#e7dbd6] p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-3 text-[#b96f84]">
              <MapPin aria-hidden="true" size={18} strokeWidth={1.6} />
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                Localização
              </p>
            </div>
            <address className="mt-4 text-sm not-italic leading-6 text-[#5f514b]">
              Rua da Alegria nº 304
              <br />
              Vila do Conde, Portugal
            </address>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#b96f84] transition hover:text-[#8f4f62]"
            >
              Ver no mapa <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          </div>

          <div className="border-b border-[#e7dbd6] p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-3 text-[#b96f84]">
              <AtSign aria-hidden="true" size={18} strokeWidth={1.6} />
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                Instagram
              </p>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#5f514b]">
            Acompanhe as nossas transformações, novidades e trabalhos pelo Instagram.
        </p>

            
            <a
              href={instagramUrl}
             
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#b96f84] transition hover:text-[#8f4f62]"
            >
              Instagram <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 text-[#b96f84]">
              <Clock3 aria-hidden="true" size={18} strokeWidth={1.6} />
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                Horário
              </p>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#5f514b]">
              Fale conosco e prepare sua próxima marcação.
            </p>
            <a
                href="#marcacao"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-md bg-[#c67b91] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#b66f84]"
            >
              Marcar horário
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
