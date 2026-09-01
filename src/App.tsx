import { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    title: "Диагностика движения",
    copy: "Оценка подвижности, привычных ограничений и реакции тела перед началом работы.",
  },
  {
    number: "02",
    title: "Мягкие мануальные техники",
    copy: "Персонально подобранная работа с мышцами и суставами без резких и агрессивных воздействий.",
  },
  {
    number: "03",
    title: "Восстановление мобильности",
    copy: "Работа над свободой движения, снижением напряжения и более комфортным самочувствием.",
  },
];

const navLinks = [
  { label: "Подход", href: "#about" },
  { label: "Направления", href: "#services" },
  { label: "Практика", href: "#portfolio" },
  { label: "Запись", href: "#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main id="top">
      <section className="hero" aria-label="Мануальная терапия">
        <img
          className="hero-background anim-fade-in"
          src={`${import.meta.env.BASE_URL}images/manual-therapy-hero.webp`}
          alt="Специалист выполняет мягкую мануальную технику для плечевого отдела"
        />
        <div className="hero-shade" aria-hidden="true" />

        <header className="hero-header">
          <a className="brand anim-fade-up delay-brand" href="#top">Специалист</a>
          <p className="hero-year anim-fade-up delay-year">2026</p>
          <nav className="desktop-nav" aria-label="Навигация по странице">
            {navLinks.slice(0, 3).map((item, index) => (
              <a key={item.label} className="anim-fade-up" style={{ animationDelay: `${1000 + index * 80}ms` }} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="desktop-socials">
            {["MAX", "WhatsApp", "Карты"].map((item, index) => (
              <a key={item} className="anim-fade-up" style={{ animationDelay: `${1150 + index * 80}ms` }} href="#contact">
                {item}
              </a>
            ))}
          </div>
          <button
            className={`menu-button anim-fade-up delay-year ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span /><span /><span />
          </button>
        </header>

        <div className="marquee-wrap anim-fade-up delay-marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>Мануальная терапия&nbsp;·&nbsp;</span>
            <span>Мануальная терапия&nbsp;·&nbsp;</span>
          </div>
        </div>

        <div className="hero-rule anim-line" />
        <div className="hero-footer">
          <p className="hero-role anim-fade-up delay-footer-left">
            Работа с телом<br />Точность движений<br />Внимание к состоянию
          </p>
          <p className="hero-placeholder anim-fade-up delay-footer-right">
            Мягкие техники<br />Индивидуальный подход<br />Комфортное движение
          </p>
        </div>

        <div className={`drawer-backdrop ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen(false)} aria-hidden={!menuOpen}>
          <aside className="mobile-drawer" onClick={(event) => event.stopPropagation()}>
            <p className="drawer-label">Навигация</p>
            <nav>
              {navLinks.map((item, index) => (
                <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} style={{ transitionDelay: menuOpen ? `${250 + index * 70}ms` : "0ms" }}>
                  {item.label}
                </a>
              ))}
            </nav>
            <p className="drawer-label social-label">Связаться</p>
            <div className="drawer-socials"><a href="#contact">MAX</a><a href="#contact">WhatsApp</a></div>
          </aside>
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="section-index">01 / 05</div>
        <div className="about-main">
          <p className="section-label">О специалисте</p>
          <h2 id="about-title">Здесь будет история специалиста</h2>
          <p className="lead-copy">Образование, опыт и подход к работе с движением, подвижностью и напряжением в теле.</p>
        </div>
        <div className="about-facts">
          <div><span>01</span><p>Здесь укажем образование и квалификацию</p></div>
          <div><span>02</span><p>Здесь перечислим основные направления работы</p></div>
          <div><span>03</span><p>Здесь раскроем особенности подхода</p></div>
        </div>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="services-heading">
          <div><p className="section-label">Направления</p><h2 id="services-title">Мануальная практика</h2></div>
          <p>Точные названия процедур, длительность и стоимость добавим после согласования.</p>
        </div>
        <div className="services-list">
          {services.map((service) => (
            <article key={service.number} className="service-row">
              <span>{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p><i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section" id="portfolio" aria-labelledby="portfolio-title">
        <div className="portfolio-heading"><p className="section-label">Практика</p><h2 id="portfolio-title">Диагностика, работа, результат</h2></div>
        <div className="portfolio-grid">
          <article className="portfolio-card portfolio-main"><div className="portfolio-photo" /><div className="portfolio-caption"><p>Специалист</p><h3>Здесь будет профессиональный портрет</h3><span>01</span></div></article>
          <article className="portfolio-card portfolio-process"><div className="portfolio-photo" /><div className="portfolio-caption"><p>Процесс</p><h3>Здесь покажем мануальную работу</h3><span>02</span></div></article>
          <article className="portfolio-card portfolio-space"><div className="portfolio-photo" /><div className="portfolio-caption"><p>Кабинет</p><h3>Здесь будет пространство приёма</h3><span>03</span></div></article>
        </div>
      </section>

      <section className="review-section" aria-labelledby="review-title">
        <div className="review-index">04 / 05</div><p className="section-label">Отзывы</p>
        <blockquote id="review-title">«Здесь будет настоящий отзыв о внимательности специалиста, ощущениях в теле и результате после сеанса»</blockquote>
        <div className="review-meta"><p>Имя клиента будет здесь</p><span>Отзыв будет подтверждён ссылкой</span></div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-top"><p>05 / 05</p><p>Специалист по мануальной терапии</p></div>
        <div className="contact-main">
          <p className="section-label">Запись</p><h2 id="contact-title">Обсудим запрос?</h2>
          <p>Здесь появится актуальная ссылка на онлайн-запись или контакт специалиста в мессенджере MAX.</p>
          <a href="#top">Связаться со специалистом <span aria-hidden="true">↗</span></a>
        </div>
        <footer><strong>Специалист</strong><p>Город и адрес будут здесь</p><p>© 2026 · Прототип портфолио</p></footer>
      </section>
    </main>
  );
}
