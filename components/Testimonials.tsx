const testimonials = [
  {
    name: "Gabriela Alves",
    rating: 5,
    text: "A melhor sem dúvida.",
  },
  {
    name: "Tiago Pascoal",
    rating: 5,
    text: "Ótimo local, bom ambiente e muita simpatia. Obrigado!",
  },
];

const ratings = [
  {
    name: "Patricia Paciência",
    rating: 5,
  },
  {
    name: "Catarina Couto",
    rating: 5,
  },
  {
    name: "Elsa Marques",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f3ece8] px-4 py-10 md:px-6 md:py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 text-center md:mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#bd7488]">
            Opiniões reais
          </p>

          <h2 className="mt-2 font-serif text-3xl text-[#2a201c] md:mt-3 md:text-5xl">
            O que dizem as nossas{" "}
            <span className="italic text-[#c67b91]">clientes</span>
          </h2>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 md:mt-5 md:gap-3">
            <span className="font-serif text-2xl text-[#2a201c] md:text-3xl">4,9</span>

            <div className="flex text-lg text-[#d9a441]">
              ★★★★★
            </div>

            <span className="text-sm text-[#7a6a64]">
              14 avaliações no Google
            </span>
          </div>
        </div>

        <div className="mx-auto grid max-w-4xl gap-3 md:grid-cols-2 md:gap-5">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="border border-[#eadfdb] bg-white p-4 shadow-[0_8px_25px_rgba(61,42,35,0.05)] md:p-6"
            >
              <div className="text-sm text-[#d9a441]">
                {"★".repeat(testimonial.rating)}
              </div>

              <p className="mt-3 font-serif text-lg leading-6 text-[#352823] md:mt-4 md:text-xl md:leading-8">
                “{testimonial.text}”
              </p>

              <div className="mt-4 border-t border-[#eee4df] pt-3 md:mt-6 md:pt-4">
                <p className="text-sm font-semibold text-[#332722]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#b77a8a]">
                  Avaliação no Google
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-3 grid max-w-4xl grid-cols-3 gap-2 md:mt-5 md:gap-3">
          {ratings.map((rating) => (
            <div
              key={rating.name}
              className="border border-[#eadfdb] bg-white px-2 py-3 text-center shadow-[0_5px_18px_rgba(61,42,35,0.04)] md:px-5 md:py-4"
            >
              <div className="text-sm text-[#d9a441]">
                {"★".repeat(rating.rating)}
              </div>

              <p className="mt-1.5 text-[11px] font-semibold leading-4 text-[#332722] md:mt-2 md:text-sm">
                {rating.name}
              </p>

              <p className="mt-1 text-[8px] uppercase tracking-[0.1em] text-[#b77a8a] md:text-[9px] md:tracking-[0.16em]">
                Avaliação no Google
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
