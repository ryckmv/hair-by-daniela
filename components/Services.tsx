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
    image: "/images/Balayage1.jpg",
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
      className="bg-[#f8f3f0] px-5 py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#d29aac]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#bd7488]">
              Serviços pensados para si
            </p>

            <span className="h-px w-7 bg-[#d29aac]" />
          </div>

          <h2 className="font-serif text-4xl leading-none text-[#2a201c] lg:text-[46px]">
            Os nossos serviços
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group overflow-hidden border border-[#eadfdb] bg-white shadow-[0_5px_20px_rgba(70,45,35,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(70,45,35,0.10)]"
              >
                <div className="relative h-[180px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} - Hair by Daniela Santos`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 16vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: service.position,
                    }}
                    className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <div className="relative flex min-h-[190px] flex-col px-4 pb-5 pt-8">
                  <div className="absolute -top-6 left-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#e7c8d1] bg-white shadow-sm">
                    <Icon
                      size={19}
                      strokeWidth={1.5}
                      className="text-[#c7788e]"
                    />
                  </div>

                  <h3 className="font-serif text-[18px] text-[#251b18]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-[1.7] text-[#756761]">
                    {service.description}
                  </p>

                  <a
                    href="#contacto"
                    className="mt-auto flex items-center gap-2 pt-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#bf7489]"
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
