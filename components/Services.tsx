import Image from "next/image";
import {
  Brush,
  Sparkles,
  MoveVertical,
  Waves,
  Crown,
  Heart,
} from "lucide-react";

const services = [
  {
    title: "Balayage",
    description:
      "Técnicas personalizadas para criar iluminação natural e sofisticada.",
    image: "/images/Balayage.jpg",
    position: "center 18%",
    icon: Brush,
  },
  {
    title: "Loiros",
    description:
      "Especialização em tons de loiro, respeitando sempre a saúde do cabelo.",
    image: "/images/loiro.jpg",
    position: "center 15%",
    icon: Sparkles,
  },
  {
    title: "Extensões",
    description:
      "Mais comprimento e volume com um resultado natural e personalizado.",
    image: "/images/Extensões.jpg",
    position: "center 15%",
    icon: MoveVertical,
  },
  {
    title: "Alisamentos",
    description:
      "Tratamentos para um cabelo alinhado, saudável e fácil de cuidar.",
    image: "/images/Alisamentos.jpg",
    position: "center 12%",
    icon: Waves,
  },
  {
    title: "Penteados",
    description:
      "Produções personalizadas para ocasiões e momentos especiais.",
    image: "/images/penteado1.jpg",
    position: "center 10%",
    icon: Crown,
  },
  {
    title: "Noivas / Bridal Hair",
    description:
      "Penteados criados especialmente para tornar o seu dia ainda mais único.",
    image: "/images/Bridal Hair.jpg",
    position: "center 10%",
    icon: Heart,
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="bg-[#fffdfb] px-3 py-10 md:px-5 md:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 text-center md:mb-10">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#d29aac]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#bd7488]">
              Serviços pensados para si
            </p>

            <span className="h-px w-7 bg-[#d29aac]" />
          </div>

          <h2 className="font-serif text-3xl leading-none text-[#2a201c] md:text-4xl lg:text-[46px]">
            Os nossos serviços
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-4 xl:grid-cols-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group overflow-hidden border border-[#eadfdb] bg-white shadow-[0_5px_20px_rgba(70,45,35,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(70,45,35,0.10)]"
              >
                <div className="relative h-[124px] overflow-hidden md:h-[180px]">
                  <Image
                    src={service.image}
                    alt={`${service.title} - Hair by Daniela Santos`}
                    fill
                    sizes="(max-width: 767px) 50vw, (max-width: 1280px) 33vw, 16vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: service.position,
                    }}
                    className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <div className="relative flex min-h-[175px] flex-col px-3 pb-3 pt-7 md:min-h-[190px] md:px-4 md:pb-5 md:pt-8">
                  <div className="absolute -top-5 left-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#e7c8d1] bg-white shadow-sm md:-top-6 md:left-4 md:h-12 md:w-12">
                    <Icon
                      size={19}
                      strokeWidth={1.5}
                      className="text-[#c7788e]"
                    />
                  </div>

                  <h3 className="font-serif text-base leading-tight text-[#251b18] md:text-[18px]">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-[1.55] text-[#756761] md:mt-3 md:text-[12px] md:leading-[1.7]">
                    {service.description}
                  </p>

                  <a
                    href="#contacto"
                    className="mt-auto flex min-h-8 items-end gap-1.5 pt-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#bf7489] md:gap-2 md:pt-5 md:text-[10px] md:tracking-[0.15em]"
                  >
                    Saber mais
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
