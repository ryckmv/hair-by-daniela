import Image from "next/image";

const specialties = ["Balayage", "Loiros", "Bridal Hair", "Formação contínua"];

export default function About() {
  return (
    <section id="sobre" className="bg-[#2a201c] px-5 py-12 md:px-6 md:py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative aspect-[5/4] overflow-hidden bg-[#e9ddd8] md:aspect-[4/5]">
            <Image
              src="/images/daniela.jpg"
              alt="Detalhe de um penteado realizado pela Hair by Daniela Santos"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-4 -right-2 border border-white/15 bg-[#181110] px-4 py-3 text-white md:-bottom-5 md:-right-7 md:px-8 md:py-5">
            <p className="font-serif text-xl italic md:text-2xl">Técnica &amp; detalhe</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/60">Em cada resultado</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#bd7488]">Sobre</p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight text-white md:mt-4 md:text-5xl">
            Daniela Santos, beleza com <span className="italic text-[#c67b91]">intenção</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#c9beb8] md:mt-6 md:text-base md:leading-7">
            Daniela Santos trabalha cada cabelo de forma personalizada, procurando resultados elegantes, atuais e fiéis à identidade de cada cliente. O cuidado técnico e a atenção ao detalhe acompanham todas as etapas do serviço.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#c9beb8] md:mt-4 md:text-base md:leading-7">
            Com especial atenção a balayage, loiros e bridal hair, mantém uma aposta constante em formação e aperfeiçoamento profissional.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-px border border-[#dfcec7] bg-[#dfcec7] md:mt-8">
            {specialties.map((specialty) => (
              <div key={specialty} className="bg-[#f8f3f0] px-3 py-3 text-xs font-medium text-[#473832] md:px-6 md:py-4 md:text-sm">
                <span className="mr-2 text-[#c67b91]">·</span>{specialty}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
