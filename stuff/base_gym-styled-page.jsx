// BASE Landing Page Figma-Compatible Layout
// Built using Tailwind CSS classes for clarity

export default function BaseLandingPage() {
  return (
    <div className="bg-[#1E1E1E] text-white font-sans">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="/logo-base.svg" alt="BASE Logo" className="mb-6 w-40" />
          <h1 className="text-5xl font-extrabold leading-tight mb-4 text-[#B0D236]">
            Conquiste um corpo forte e definido
          </h1>
          <p className="text-lg text-[#9A9873] mb-6">
            A força que você busca começa aqui. Treinos inteligentes, eficientes e com progressão real.
          </p>
          <button className="bg-[#B0D236] text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition">
            Agende Aula Experimental
          </button>
        </div>
        <div>
          <img src="/hero-image.jpg" alt="Treino BASE" className="rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="bg-[#4C4A2D] py-4 text-sm font-medium text-center">
        <div className="flex flex-wrap justify-center gap-6 text-[#B0D236]">
          <span>Acompanhamento Profissional</span>
          <span>Para Todos os Níveis</span>
          <span>Atendimento Personalizado</span>
          <span>Resultados Visíveis</span>
          <span>Estrutura Exclusiva</span>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-[#B0D236] mb-4">Explore a Experiência BASE Completa</h2>
        <p className="text-[#9A9873] max-w-2xl mb-12">
          Cada serviço foi pensado para transformar seu corpo e mente com motivação constante e evolução real.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Calistenia com Propósito",
              desc: "Peso corporal, definição, equilíbrio e consciência corporal.",
              cta: "Saiba Mais"
            },
            {
              title: "Escalada Indoor",
              desc: "Para todos os níveis, divertida e desafiadora.",
              cta: "Quero Escalar"
            },
            {
              title: "Fisioterapia Esportiva",
              desc: "Prevenção e recuperação com suporte técnico.",
              cta: "Marcar Sessão"
            }
          ].map((service, i) => (
            <div key={i} className="bg-[#2A2A1E] rounded-xl p-6 text-white shadow-lg">
              <h3 className="text-xl font-bold text-[#B0D236] mb-2">{service.title}</h3>
              <p className="mb-4 text-[#ccc]">{service.desc}</p>
              <button className="text-black bg-[#B0D236] px-4 py-2 rounded-md font-semibold">
                {service.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Continue with sections 3–7 as structured before */}
      {/* Benefits, Coaches, Plans & Pricing, Testimonials, Final CTA */}
    </div>
  );
}
