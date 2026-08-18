import Image from "next/image";

const specialties = ["Balayage", "Loiros", "Bridal Hair", "Formação contínua"];

export default function About() {
  return (
    <section id="sobre" className="bg-[#f8f3f0] px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#e9ddd8]">
            <Image
              src="/images/penteado-2.jpg"
              alt="Detalhe de um penteado realizado pela Hair by Daniela Santos"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 bg-[#2a201c] px-6 py-5 text-white sm:-right-7 sm:px-8">
            <p className="font-serif text-2xl italic">Técnica &amp; detalhe</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/60">Em cada resultado</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#bd7488]">Sobre</p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-[#2a201c] sm:text-5xl">
            Daniela Santos, beleza com <span className="italic text-[#c67b91]">intenção</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#6e625d]">
            Daniela Santos trabalha cada cabelo de forma personalizada, procurando resultados elegantes, atuais e fiéis à identidade de cada cliente. O cuidado técnico e a atenção ao detalhe acompanham todas as etapas do serviço.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#6e625d]">
            Com especial atenção a balayage, loiros e bridal hair, mantém uma aposta constante em formação e aperfeiçoamento profissional.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-px border border-[#dfcec7] bg-[#dfcec7]">
            {specialties.map((specialty) => (
              <div key={specialty} className="bg-[#f8f3f0] px-4 py-4 text-sm font-medium text-[#473832] sm:px-6">
                <span className="mr-2 text-[#c67b91]">·</span>{specialty}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
