"use client";

import { FormEvent, useState } from "react";

const services = [
  "Balayage",
  "Loiros",
  "Extensões",
  "Alisamentos",
  "Penteados",
  "Bridal Hair",
];

export default function Booking() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const phone = "5573982336518";

const message = `Olá, Daniela! 👋

Gostaria de pedir uma marcação.

✨ *Serviço:* ${service}
📅 *Data pretendida:* ${date}
🕒 *Horário pretendido:* ${time}
👤 *Nome:* ${name}

Pode confirmar se existe disponibilidade para este horário?

Obrigada!`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="marcacao"
      className="bg-[#fffdfb] px-5 py-10 md:px-6 md:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-6 md:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#bd7488]">
            Marcação
          </p>

          <h2 className="mt-2 font-serif text-3xl leading-tight text-[#2a201c] md:mt-3 md:text-5xl">
            Escolha o seu{" "}
            <span className="italic text-[#c67b91]">horário preferido</span>
          </h2>

          <p className="mt-3 max-w-md text-sm leading-6 text-[#6e625d] md:mt-5">
            Indique o serviço, data e horário pretendido. O pedido será enviado
            diretamente para a Daniela através do WhatsApp.
          </p>

          <p className="mt-2 max-w-md text-xs leading-5 text-[#9a7c75] md:mt-4">
            A marcação apenas fica confirmada após resposta da Daniela.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-3 bg-white p-4 shadow-[0_12px_35px_rgba(61,42,35,0.07)] md:gap-5 md:p-8"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8c7169] md:mb-2"
            >
              Nome
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              placeholder="O seu nome"
              className="min-h-11 w-full border border-[#e7dcd8] bg-[#fcf9f7] px-3 py-2.5 text-sm text-[#2a201c] outline-none transition focus:border-[#c67b91] md:px-4 md:py-3"
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8c7169] md:mb-2"
            >
              Serviço
            </label>

            <select
              id="service"
              value={service}
              onChange={(event) => setService(event.target.value)}
              required
              className="min-h-11 w-full border border-[#e7dcd8] bg-[#fcf9f7] px-3 py-2.5 text-sm text-[#2a201c] outline-none transition focus:border-[#c67b91] md:px-4 md:py-3"
            >
              <option value="">Escolher serviço</option>

              {services.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-5">
            <div>
              <label
                htmlFor="date"
                className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8c7169] md:mb-2"
              >
                Data
              </label>

              <input
                id="date"
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                required
                className="min-h-11 w-full min-w-0 border border-[#e7dcd8] bg-[#fcf9f7] px-2 py-2.5 text-sm text-[#2a201c] outline-none transition focus:border-[#c67b91] md:px-4 md:py-3"
              />
            </div>

            <div>
              <label
                htmlFor="time"
                className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8c7169] md:mb-2"
              >
                Horário
              </label>

              <input
                id="time"
                type="time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
                required
                className="min-h-11 w-full min-w-0 border border-[#e7dcd8] bg-[#fcf9f7] px-2 py-2.5 text-sm text-[#2a201c] outline-none transition focus:border-[#c67b91] md:px-4 md:py-3"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-1 inline-flex min-h-11 items-center justify-center bg-[#c67b91] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#b66f84] md:mt-2 md:px-6 md:py-4 md:text-xs md:tracking-[0.14em]"
          >
            Pedir marcação no WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
