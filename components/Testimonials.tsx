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
    <section className="bg-[#fffaf7] px-6 py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#bd7488]">
            Opiniões reais
          </p>

          <h2 className="mt-3 font-serif text-4xl text-[#2a201c] sm:text-5xl">
            O que dizem as nossas{" "}
            <span className="italic text-[#c67b91]">clientes</span>
          </h2>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <span className="font-serif text-3xl text-[#2a201c]">4,9</span>

            <div className="flex text-lg text-[#d9a441]">
              ★★★★★
            </div>

            <span className="text-sm text-[#7a6a64]">
              14 avaliações no Google
            </span>
          </div>
        </div>

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="border border-[#eadfdb] bg-white p-6 shadow-[0_8px_25px_rgba(61,42,35,0.05)]"
            >
              <div className="text-sm text-[#d9a441]">
                {"★".repeat(testimonial.rating)}
              </div>

              <p className="mt-4 font-serif text-xl leading-8 text-[#352823]">
                “{testimonial.text}”
              </p>

              <div className="mt-6 border-t border-[#eee4df] pt-4">
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

        <div className="mx-auto mt-5 grid max-w-4xl gap-3 sm:grid-cols-3">
          {ratings.map((rating) => (
            <div
              key={rating.name}
              className="border border-[#eadfdb] bg-white px-5 py-4 text-center shadow-[0_5px_18px_rgba(61,42,35,0.04)]"
            >
              <div className="text-sm text-[#d9a441]">
                {"★".repeat(rating.rating)}
              </div>

              <p className="mt-2 text-sm font-semibold text-[#332722]">
                {rating.name}
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-[#b77a8a]">
                Avaliação no Google
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}