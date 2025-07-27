// BASE Landing Page Figma-Compatible Layout
// Built using Tailwind CSS classes for clarity

import React from 'react';
import coach1 from './assets/coach_1.png';
import coach2 from './assets/coach_2.jpg';
import coach3 from './assets/coach_3.jpg';
import coach4 from './assets/coach_4.jpg';
import bBg from './assets/backgrounds/b_bg.png';
import faixada from './assets/backgrounds/faixada.jpg';
import aBg from './assets/backgrounds/a_bg.png';
import logoPattern from './assets/logo_pattern.png';
import treinoBaseVideo from './assets/Reels_Base_Calistenia.mp4';
import testimonialBg from './assets/IMG_0041.jpg';

const coaches = [
  { image: coach1 },
  { image: coach2 },
  { image: coach3 },
  { image: coach4 },
];

const pricingPlans = [
  {
    title: "CALISTENIA 10X AULAS",
    price: "400",
    planDuration: "Plano 2 meses",
    installments: "em até 2x",
    total: null,
    popular: false,
    link: "https://app.tecnofit.com.br/ng/online-sale/MTQ5MzQw/checkout/ODk2Mzk5/site"
  },
  {
    title: "CALISTENIA 5X SEMANAL",
    price: "435",
    planDuration: "Plano 6 meses",
    installments: "Total R$ 2.610,00",
    total: null,
    popular: true,
    link: "https://app.tecnofit.com.br/ng/online-sale/MTQ5MzQw/checkout/ODk2NDE0/site"
  },
  {
    title: "ESCALADA AULA AVULSA",
    price: "60",
    planDuration: "Plano 7 dias",
    installments: null,
    total: null,
    popular: false,
    link: "https://app.tecnofit.com.br/ng/online-sale/MTQ5MzQw/checkout/ODk2Mzk3/site"
  },
  {
    title: "FISIOTERAPIA AVULSA",
    price: "180",
    planDuration: "Plano 7 dias",
    installments: null,
    total: null,
    popular: false,
    link: "https://app.tecnofit.com.br/ng/online-sale/MTQ5MzQw/checkout/ODk2Mzk5/site"
  }
];

const WhatsAppButton = () => {
  const phoneNumber = "5571982495275";
  const message = "Olá! Tenho uma dúvida sobre a BASE e gostaria de mais informações.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 hover:scale-110 hover:shadow-xl transition-all duration-300"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    </a>
  );
};

const UberButton = () => {
  const uberLink = "https://m.uber.com/looking?drop[0]=%7B%22latitude%22%3A-13.0087211%2C%22longitude%22%3A-38.5293016%2C%22addressLine1%22%3A%22Base%20Calistenia%20e%20Performance%22%2C%22addressLine2%22%3A%22R.%20Alfredo%20Magalh%C3%A3es%2C%20115%20-%20Barra%2C%20Salvador%20-%20BA%2C%2040140-140%22%7D";

  return (
    <a
      href={uberLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.963 13.931c-.14.42-.52.701-.963.701h-1.25c-.41 0-.76-.281-.89-.681l-.99-2.969h-3.74l-.99 2.969c-.13.4-.48.681-.89.681h-1.25c-.443 0-.823-.281-.963-.701-.14-.42-.04-.881.25-1.201l4.5-5.5c.3-.361.75-.581 1.25-.581s.95.22 1.25.581l4.5 5.5c.29.32.39.781.25 1.201zm-5.213-3.931h2.5l-1.25-1.531-1.25 1.531z"/>
      </svg>
      Chamar um Uber
    </a>
  );
};

export default function BaseLandingPage() {
  return (
    <div className="bg-baseDark text-grayLight font-sans">
      {/* (BLOCO-1) Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="wow fadeIn" data-wow-delay="0.2s">
          <div className="bg-lime/50 p-2 rounded-xl inline-block mb-8 shadow-lg shadow-lime/20">
            <img src={logoPattern} alt="BASE Logo Placeholder" className="w-32 h-22 object-contain" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-4 text-lime [text-shadow:0_0_15px_var(--tw-shadow-color)] shadow-lime/50">
            CONQUISTE O CORPO FORTE E DEFINIDO
          </h1>
          <p className="text-white text-lightO mb-8 max-w-xl">
            A força que você busca começa aqui. Descubra o método BASE:
            Aqui, o treino com peso corporal é eficiente, estético e funcional com progressão real, conexão mente-músculo e acompanhamento próximo. Esqueça treinos monótonos: experimente uma nova forma de evoluir.
          </p>
          <a href="https://app.tecnofit.com.br/ng/online-sale/MTQ5MzQw/checkout/OTQxNzgy/forms" target="_blank" rel="noopener noreferrer">
            <button className="bg-lime text-black px-8 py-4 rounded-xl font-bold shadow-xl shadow-lime/40 hover:scale-105 hover:shadow-2xl hover:shadow-lime/50 transition-all duration-300">
              Agende Aula Experimental
            </button>
          </a>
        </div>
        <div className="wow fadeIn aspect-w-4 aspect-h-3 rounded-2xl shadow-2xl shadow-lime/30" data-wow-delay="0.4s">
          <video 
            src={treinoBaseVideo} 
            alt="Treino BASE" 
            className="rounded-2xl object-cover w-full h-full" 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
        </div>
      </section>

      {/* ( BLOCO-1.1) Highlights Bar */}
      <section className="bg-baseDark border-y border-olive/50 py-4 text-sm font-medium text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2 text-lime">
          <span>Acompanhamento Profissional</span>
          <span className="hidden md:inline">|</span>
          <span>Para Todos os Níveis</span>
          <span className="hidden md:inline">|</span>
          <span>Atendimento Personalizado</span>
          <span className="hidden md:inline">|</span>
          <span>Resultados Visíveis</span>
        </div>
      </section>

      {/* (BLOCO-2) Services Section */}
      <section 
        className="relative bg-cover bg-center py-20 md:py-28"
        style={{ backgroundImage: `url(${bBg})` }}
      >
        <div className="absolute inset-0 bg-baseDark opacity-70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-lime mb-4 tracking-tight">Explore a Experiência BASE</h2>
          <p className="text-white max-w-2xl mb-12 text-lg">
            Cada serviço foi pensado para transformar seu corpo e mente com motivação constante e evolução real.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Calistenia com Propósito",
                desc: "Peso corporal, definição, equilíbrio e consciência corporal.",
                cta: "Saiba Mais",
                link: "https://app.tecnofit.com.br/ng/online-sale/MTQ5MzQw/checkout/ODk2Mzk2/site"
              },
              {
                title: "Escalada Indoor",
                desc: "Para todos os públicos, divertida e desafiadora.",
                cta: "Quero Escalar",
                link: "https://app.tecnofit.com.br/ng/online-sale/MTQ5MzQw/checkout/ODk2Mzk3/site"
              },
              {
                title: "Fisioterapia",
                desc: "Prevenção e recuperação com suporte técnico.",
                cta: "Marcar Sessão",
                link: "https://app.tecnofit.com.br/ng/online-sale/MTQ5MzQw/checkout/ODk2Mzk5/site"
              }
            ].map((service, i) => (
              <div key={i} className="bg-olive rounded-xl p-8 text-white shadow-lg border border-transparent hover:border-lime transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-lime mb-3">{service.title}</h3>
                <p className="mb-6 text-grayLight">{service.desc}</p>
                <a href={service.link} target="_blank" rel="noopener noreferrer">
                  <button className="text-black bg-lime px-5 py-2 rounded-md font-semibold hover:bg-lime/90 transition-colors">
                    {service.cta}
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* (BLOCO-3) Benefits Section */}
      <section className="bg-olive py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-lime mb-6 tracking-tight">Por que escolher a BASE?</h2>
          <p className="text-grayLight max-w-3xl mb-12 text-lg">
            Mais do que uma academia, a BASE é um espaço climatizado, equipado com o que há de melhor para o seu treino.
          </p>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
            {[
              "Resultados Estéticos Reais",
              "Treinos Envolventes e Nada Monótonos",
              "Conexão Mente-Músculo",
              "Acompanhamento de Verdade",
              "Ambiente que Motiva",
              "Estrutura de Ponta"
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="text-lime text-3xl mt-0 font-black">✓</div>
                <p className="text-grayLight text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* (BLOCO-4) Coaches Section */}
      <section 
        className="relative bg-cover bg-center py-20 md:py-28"
        style={{ backgroundImage: `url(${aBg})` }}
      >
        <div className="absolute inset-0 bg-baseDark opacity-80"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-lime mb-4 tracking-tight">Uma Equipe Presente em Cada Etapa</h2>
            <p className="text-white mb-12 max-w-3xl text-lg mx-auto">
              Você será acompanhado por profissionais experientes, atentos e apaixonados pelo que fazem — incluindo atletas profissionais que vivem na prática o que ensinam.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {coaches.slice(0, 4).map((coach, index) => (
                <div key={index} className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={coach.image}
                    alt={`Coach ${index + 1}`}
                    className="w-full h-full object-cover object-top md:object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* (BLOCO-5) Pricing Section */}
      <section className="bg-olive py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-lime mb-4 tracking-tight text-center">Nossos Planos</h2>
          <p className="text-grayLight mb-12 max-w-3xl text-lg text-center mx-auto">
            Escolha a opção que melhor se encaixa nos seus objetivos e tenha acompanhamento profissional de verdade.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {pricingPlans.map((plan) => (
              <div key={plan.title} className={`relative bg-baseDark rounded-xl shadow-lg p-6 text-center flex flex-col h-full group hover:bg-lime transition-all duration-300 ${plan.popular ? 'border-2 border-lime' : ''}`}>
                {plan.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-lime text-black text-xs font-bold px-3 py-1 rounded-full">MAIS POPULAR</div>}
                <div className="bg-olive group-hover:bg-baseDark/20 p-3 rounded-md mb-6">
                  <h3 className="font-bold text-white text-sm uppercase tracking-wider">{plan.title}</h3>
                </div>
                <div className="mb-6 flex-grow">
                  <p className="text-grayLight group-hover:text-baseDark">
                    <span className="text-3xl font-bold text-lime group-hover:text-olive">R$</span>
                    <span className="text-5xl md:text-6xl font-extrabold text-lime group-hover:text-olive tracking-tighter">{plan.price}</span>
                    <span className="text-3xl font-bold text-lime group-hover:text-olive">,00</span>
                  </p>
                  <p className="text-lightOlive group-hover:text-olive font-semibold mt-2">{plan.planDuration}</p>
                  {plan.installments && <p className="text-grayMedium group-hover:text-olive/80 text-sm">{plan.installments}</p>}
                </div>
                <a href={plan.link} target="_blank" rel="noopener noreferrer" className="w-full">
                  <button className="w-full bg-lime text-black font-bold py-3 rounded-lg border-2 border-lime group-hover:bg-baseDark group-hover:text-lime group-hover:border-baseDark transition-all duration-300">
                    SELECIONAR
                  </button>
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a 
              href="https://app.tecnofit.com.br/ng/online-sale/MTQ5MzQw/site" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lime font-semibold hover:underline transition-all text-lg"
            >
              Ver todos os Planos
            </a>
          </div>
          <div className="text-center text-lightOlive mt-12 space-y-2 text-sm">
              <p>✓ É possível reagendar horários e dias de cada sessão.</p>
              <p>✓ Para sessões avulsas, a utilização deverá ocorrer em até 7 dias.</p>
          </div>
        </div>
      </section>

      {/* (BLOCO-5.1) Schedule Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-lime mb-8 tracking-tight uppercase">
          Horários e Turmas
        </h2>
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-lime mb-3">Horários Calistenia</h3>
          <p className="text-gray-300 mb-6 text-lg">
            Seg, Qua, Sex: Push/Pull/Core → 6h – 20h
            <br />
            Ter, Qui: Leg Training → 6h – 19h
          </p>
          <h3 className="text-2xl font-bold text-lime mt-8 mb-3">Horários Escalada</h3>
          <p className="text-gray-300 text-lg">
            Segunda a Sexta → 6h às 20h
          </p>
          <p className="italic text-lightOlive text-sm mt-2">
            *Turma das 20h apenas às segundas, quartas e sextas-feiras.
          </p>
        </div>
      </section>

      {/* (BLOCO-6) Testimonials Section */}
      <section 
        className="relative py-20 md:py-28 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${testimonialBg})` }}
      >
        <div className="absolute inset-0 bg-baseDark/30"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="bg-baseDark/10 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-olive/50">
            <h2 className="text-4xl md:text-5xl font-bold text-lime mb-6 tracking-tight">O que dizem sobre a BASE?</h2>
            <blockquote className="text-grayLight italic text-xl md:text-2xl leading-relaxed">
              “A melhor academia que já treinei. Ambiente inspirador, aulas dinâmicas e equipe atenciosa. Tratei uma lesão no ombro e evoluí com prazer no treino.”
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-4">
              <img 
                src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Ana C." 
                className="w-14 h-14 rounded-full object-cover border-2 border-lime"
              />
              <div>
                <p className="text-lightOlive font-semibold">— Ana C.</p>
                <p className="text-sm text-grayMedium">Aluna da BASE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (BLOCO-7) Final CTA Section */}
      <section className="bg-olive text-white py-20 md:py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-lime mb-4 tracking-tight">Pronto para começar sua evolução?</h2>
          <p className="text-grayLight mb-8 text-lg">Experimente uma sessão com acompanhamento profissional, estrutura de ponta, e resultados reais. Sem enrolação, sem compromisso de longo prazo.</p>
          <ul className="text-left max-w-md mx-auto mb-8 space-y-2 text-grayLight">
            <li className="flex items-center gap-3"><span className="text-lime font-bold text-xl">✓</span> Definição muscular e evolução estética</li>
            <li className="flex items-center gap-3"><span className="text-lime font-bold text-xl">✓</span> Treinos dinâmicos com progressão inteligente</li>
            <li className="flex items-center gap-3"><span className="text-lime font-bold text-xl">✓</span> Suporte técnico e humano</li>
            <li className="flex items-center gap-3"><span className="text-lime font-bold text-xl">✓</span> Ambiente climatizado e motivador</li>
          </ul>
          <a href="https://app.tecnofit.com.br/ng/online-sale/MTQ5MzQw/checkout/OTQxNzgy/forms" target="_blank" rel="noopener noreferrer">
            <button className="bg-lime text-black px-8 py-4 rounded-xl font-bold mt-4 shadow-xl shadow-lime/20 hover:scale-105 hover:shadow-2xl hover:shadow-lime/30 transition-all duration-300">
              👉 Agende Sua Aula Experimental
            </button>
          </a>
          <p className="text-sm text-lightOlive mt-6">📍 Barra, Salvador </p>
        </div>
      </section>

      {/* (BLOCO-6.5) Location Section */}
      <section 
        className="relative bg-cover bg-center py-20 md:py-28"
        style={{ backgroundImage: `url(${faixada})` }}
      >
        <div className="absolute inset-0 bg-baseDark opacity-70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-lime mb-4 tracking-tight">Nossa Localização</h2>
        <p className="text-white mb-4 max-w-3xl text-lg mx-auto">
          Venha nos visitar e conhecer nossa estrutura de perto.
        </p>
        <p className="text-lightOlive mb-4">
          R. Alfredo Magalhães, N° 115 - Barra, Salvador - BA, 40140-140
        </p>
        <UberButton />
        <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-olive mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.81436298123!2d-38.51940362568916!3d-12.98373399084801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160518d377556d%3A0x83a1349138513f4f!2sR.%20Alfredo%20Magalh%C3%A3es%2C%20115%20-%20Barra%2C%20Salvador%20-%20BA%2C%2040140-140!5e0!3m2!1spt-BR!2sbr!4v1722034567890!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da BASE"
          ></iframe>
        </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
