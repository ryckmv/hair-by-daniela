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

    const phone = "351934612089";

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
      className="bg-[#f8f3f0] px-6 py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#bd7488]">
            Marcação
          </p>

          <h2 className="mt-3 font-serif text-4xl leading-tight text-[#2a201c] sm:text-5xl">
            Escolha o seu{" "}
            <span className="italic text-[#c67b91]">horário preferido</span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-6 text-[#6e625d]">
            Indique o serviço, data e horário pretendido. O pedido será enviado
            diretamente para a Daniela através do WhatsApp.
          </p>

          <p className="mt-4 max-w-md text-xs leading-5 text-[#9a7c75]">
            A marcação apenas fica confirmada após resposta da Daniela.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-5 bg-white p-6 shadow-[0_12px_35px_rgba(61,42,35,0.07)] sm:p-8"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8c7169]"
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
              className="w-full border border-[#e7dcd8] bg-[#fcf9f7] px-4 py-3 text-sm text-[#2a201c] outline-none transition focus:border-[#c67b91]"
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8c7169]"
            >
              Serviço
            </label>

            <select
              id="service"
              value={service}
              onChange={(event) => setService(event.target.value)}
              required
              className="w-full border border-[#e7dcd8] bg-[#fcf9f7] px-4 py-3 text-sm text-[#2a201c] outline-none transition focus:border-[#c67b91]"
            >
              <option value="">Escolher serviço</option>

              {services.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="date"
                className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8c7169]"
              >
                Data
              </label>

              <input
                id="date"
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                required
                className="w-full border border-[#e7dcd8] bg-[#fcf9f7] px-4 py-3 text-sm text-[#2a201c] outline-none transition focus:border-[#c67b91]"
              />
            </div>

            <div>
              <label
                htmlFor="time"
                className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8c7169]"
              >
                Horário
              </label>

              <input
                id="time"
                type="time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
                required
                className="w-full border border-[#e7dcd8] bg-[#fcf9f7] px-4 py-3 text-sm text-[#2a201c] outline-none transition focus:border-[#c67b91]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center bg-[#c67b91] px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#b66f84]"
          >
            Pedir marcação no WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}