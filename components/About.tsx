import ExperienceCarousel from "./ExperienceCarousel";

const specialties = ["Balayage", "Loiros", "Bridal Hair", "Formação contínua"];

export default function About() {
  return (
    <section id="sobre" className="bg-[#2a201c] px-5 py-12 md:px-6 md:py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <ExperienceCarousel />

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#bd7488]">Sobre</p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight text-white md:mt-4 md:text-5xl">
            Daniela Santos, beleza com <span className="italic text-[#c67b91]">intenção</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#c9beb8] md:mt-6 md:text-base md:leading-7">
            Daniela Santos trabalha cada cabelo de forma personalizada, procurando resultados elegantes, atuais e fiéis à identidade de cada cliente. O cuidado técnico e a atenção ao detalhe acompanham todas as etapas do serviço.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#c9beb8] md:mt-4 md:text-base md:leading-7">
            Com 20 anos de carreira, Daniela Santos é formada como oficial de cabeleireiro e fundadora do Hair by Daniela Santos. Mantém uma aposta constante em formação e aperfeiçoamento profissional.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#c9beb8] md:text-base md:leading-7">
            A equipa conta ainda com Daniela Marques, presente há 10 anos, e Cristiana, connosco há 2 anos, ambas formadas como ajudantes de cabeleireiro.
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
