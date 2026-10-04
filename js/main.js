// ---------------------------------------------
// Translations
// ---------------------------------------------
const translations = {
  en: {
    skip: 'Skip to content',
    nav: {
      services: 'Services',
      projects: 'Projects',
      process: 'How we work',
      about: 'About',
      contact: 'Contact',
      cta: 'Get in touch',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    hero: {
      role: 'Development & data studio',
      headline: 'We build the technology that takes your business beyond the surface.',
      sub: 'Websites, data dashboards, automations and social media management — everything designed so your team swims ahead while we handle the tech.',
      ctaPrimary: 'See services',
      ctaSecondary: 'Get in touch',
      imageAlt: 'Computer illustration',
    },
    stats: {
      projectsLabel: 'projects delivered',
      frentesLabel: 'areas of expertise, from websites to automation',
      remoteLabel: 'remote, any timezone',
    },
    services: {
      title: 'Services',
      subtitle: 'Five fronts, one team taking care of everything end to end.',
      sites: {
        icon: 'Websites',
        meta: 'Web · Websites & landing pages',
        title: 'Website creation',
        desc: 'Institutional websites, landing pages and online stores that are fast, responsive and built to convert — not just to exist.',
        tools: ['HTML5 & CSS3', 'React / Next.js'],
      },
      data: {
        icon: 'Data Analysis',
        meta: 'Data Analysis · Dashboards',
        title: 'Data Analysis & interactive apps',
        desc: 'We turn raw data into dashboards and interactive applications your team actually uses to make decisions.',
        tools: ['Python', 'SQL', 'D3 / Plotly'],
      },
      bigdata: {
        icon: 'Big Data',
        meta: 'Data · Infrastructure',
        title: 'Big data',
        desc: 'Architectures to collect, store and process large volumes of data with performance and cost under control.',
        tools: ['Spark', 'Airflow', 'BigQuery / AWS'],
      },
      social: {
        icon: 'Social',
        meta: 'Marketing · Social media',
        title: 'Social media management',
        desc: 'Content planning, production and social media management so your brand grows consistently.',
        tools: ['Editorial calendar', 'Meta Ads', 'Monthly reports'],
      },
      automation: {
        icon: 'Automation',
        meta: 'Operations · Automation',
        title: 'Process automation',
        desc: 'Automated workflows that eliminate repetitive tasks and free your team for what really matters.',
        tools: ['Zapier / n8n', 'Python', 'API integrations'],
      },
    },
    process: {
      title: 'How we work',
      subtitle: 'A simple process, from first diagnosis to post-launch support.',
      step1: { title: 'Diagnosis', desc: 'We understand your business, the real problem and where technology can help fastest.' },
      step2: { title: 'Proposal', desc: 'We draw up a clear plan with scope, deadlines and investment defined before we start.' },
      step3: { title: 'Development', desc: 'We build in short cycles with visible deliveries and room for adjustments along the way.' },
      step4: { title: 'Ongoing support', desc: 'After launch, we stay close: maintenance, improvements and new fronts when it makes sense.' },
    },
    projects: {
      title: 'Projects',
      subtitle: 'An example of what we deliver when data and visualization meet.',
      case: {
        meta: 'Data analysis · R · RPubs',
        title: 'Russo-Ukrainian War Analysis',
        desc: 'Exploratory analysis of the Russia-Ukraine War using public Kaggle data. The project examines equipment losses, personnel casualties, prisoners of war and wounded, using R, tidyverse and Plotly to generate interactive visualizations.',
        tools: ['R', 'tidyverse', 'Plotly', 'Kaggle'],
        cta: 'View project on RPubs',
        imageAlt: 'Preview of the Russo-Ukrainian War Analysis project',
      },
    },
    about: {
      title: 'About Dolphin Developer',
      p1: 'Why a dolphin? Dolphins are fast, smart and work in groups — exactly how we like to build technology: with agility, applied intelligence and a lean team behind every project.',
      p2: 'Dolphin Developer was born to be the technical partner for companies that need serious technology without the bureaucracy of a big agency.',
      imageAlt: 'Computer illustration',
    },
    contact: {
      title: 'Get in touch',
      subtitle: 'Tell us a little about your project — we reply within two business days.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submit: 'Send message',
      errors: {
        name: 'Please enter your name.',
        email: 'Please enter a valid email.',
        message: 'Tell us a bit more — at least 10 characters.',
        fixFields: 'Please fix the highlighted fields.',
        sending: 'Sending…',
        success: 'We received your message — we reply within two business days.',
      },
    },
    footer: { text: 'Dolphin Developer — technology with agility.' },
  },

  pt: {
    skip: 'Pular para o conteúdo',
    nav: {
      services: 'Serviços',
      projects: 'Projetos',
      process: 'Como trabalhamos',
      about: 'Sobre',
      contact: 'Contato',
      cta: 'Falar com a gente',
      menuOpen: 'Abrir menu',
      menuClose: 'Fechar menu',
    },
    hero: {
      role: 'Estúdio de desenvolvimento & dados',
      headline: 'Construímos a tecnologia que leva o seu negócio além da superfície.',
      sub: 'Sites, dashboards de dados, automações e gestão de redes sociais — tudo desenhado para o seu time nadar de braçada enquanto a gente cuida da tecnologia.',
      ctaPrimary: 'Ver serviços',
      ctaSecondary: 'Falar com a gente',
      imageAlt: 'Ilustração de um computador',
    },
    stats: {
      projectsLabel: 'projetos entregues',
      frentesLabel: 'frentes de atuação, de site a automação',
      remoteLabel: 'remoto, em qualquer fuso',
    },
    services: {
      title: 'Serviços',
      subtitle: 'Cinco frentes, um time só cuidando de tudo de ponta a ponta.',
      sites: {
        icon: 'Sites',
        meta: 'Web · Sites & landing pages',
        title: 'Criação de sites',
        desc: 'Sites institucionais, landing pages e lojas virtuais rápidos, responsivos e construídos para converter — não só para existir.',
        tools: ['HTML5 & CSS3', 'React / Next.js'],
      },
      data: {
        icon: 'Análise de Dados',
        meta: 'Análise de Dados · Dashboards',
        title: 'Análise de Dados & apps interativos',
        desc: 'Transformamos dados brutos em dashboards e aplicações interativas que sua equipe realmente usa para decidir.',
        tools: ['Python', 'SQL', 'D3 / Plotly'],
      },
      bigdata: {
        icon: 'Big Data',
        meta: 'Dados · Infraestrutura',
        title: 'Big data',
        desc: 'Arquiteturas para coletar, armazenar e processar grandes volumes de dados com performance e custo sob controle.',
        tools: ['Spark', 'Airflow', 'BigQuery / AWS'],
      },
      social: {
        icon: 'Social',
        meta: 'Marketing · Social media',
        title: 'Gestão de redes sociais',
        desc: 'Planejamento de conteúdo, produção e gestão de redes sociais para a sua marca crescer com consistência.',
        tools: ['Calendário editorial', 'Meta Ads', 'Relatórios mensais'],
      },
      automation: {
        icon: 'Automação',
        meta: 'Operações · Automação',
        title: 'Automação de processos',
        desc: 'Fluxos automatizados que eliminam tarefas repetitivas e liberam o seu time para o que realmente importa.',
        tools: ['Zapier / n8n', 'Python', 'Integrações via API'],
      },
    },
    process: {
      title: 'Como trabalhamos',
      subtitle: 'Um processo simples, do primeiro diagnóstico ao suporte depois do lançamento.',
      step1: { title: 'Diagnóstico', desc: 'Entendemos o seu negócio, o problema real e onde a tecnologia pode ajudar mais rápido.' },
      step2: { title: 'Proposta', desc: 'Desenhamos um plano claro, com escopo, prazos e investimento definidos antes de começar.' },
      step3: { title: 'Desenvolvimento', desc: 'Construímos em ciclos curtos, com entregas visíveis e espaço para ajustes no caminho.' },
      step4: { title: 'Suporte contínuo', desc: 'Depois do lançamento, seguimos por perto: manutenção, melhorias e novas frentes quando fizer sentido.' },
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Um exemplo do que entregamos quando dados e visualização se encontram.',
      case: {
        meta: 'Análise de dados · R · RPubs',
        title: 'Russo-Ukrainian War Analysis',
        desc: 'Análise exploratória da Guerra Rússia-Ucrânia a partir de dados públicos do Kaggle. O projeto examina perdas de equipamentos, baixas de pessoal, prisioneiros de guerra e feridos, usando R, tidyverse e Plotly para gerar visualizações interativas.',
        tools: ['R', 'tidyverse', 'Plotly', 'Kaggle'],
        cta: 'Ver projeto no RPubs',
        imageAlt: 'Prévia do projeto Russo-Ukrainian War Analysis',
      },
    },
    about: {
      title: 'Sobre a Dolphin Developer',
      p1: 'Por que um golfinho? Golfinhos são rápidos, inteligentes e trabalham em grupo — exatamente como gostamos de construir tecnologia: com agilidade, inteligência aplicada e um time enxuto por trás de cada projeto.',
      p2: 'A Dolphin Developer nasceu para ser o parceiro técnico de empresas que precisam de tecnologia séria, sem a burocracia de uma agência grande.',
      imageAlt: 'Ilustração de um computador',
    },
    contact: {
      title: 'Fale com a gente',
      subtitle: 'Conta um pouco sobre o seu projeto — respondemos em até dois dias úteis.',
      nameLabel: 'Nome',
      emailLabel: 'E-mail',
      messageLabel: 'Mensagem',
      submit: 'Enviar mensagem',
      errors: {
        name: 'Digite seu nome.',
        email: 'Digite um e-mail válido.',
        message: 'Conte um pouco mais — pelo menos 10 caracteres.',
        fixFields: 'Corrija os campos destacados.',
        sending: 'Enviando…',
        success: 'Recebemos sua mensagem — respondemos em até dois dias úteis.',
      },
    },
    footer: { text: 'Dolphin Developer — tecnologia com agilidade.' },
  },

  es: {
    skip: 'Saltar al contenido',
    nav: {
      services: 'Servicios',
      projects: 'Proyectos',
      process: 'Cómo trabajamos',
      about: 'Nosotros',
      contact: 'Contacto',
      cta: 'Hablemos',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
    },
    hero: {
      role: 'Estudio de desarrollo & datos',
      headline: 'Construimos la tecnología que lleva tu negocio más allá de la superficie.',
      sub: 'Sitios web, dashboards de datos, automatizaciones y gestión de redes sociales — todo diseñado para que tu equipo nade a braza mientras nosotros nos encargamos de la tecnología.',
      ctaPrimary: 'Ver servicios',
      ctaSecondary: 'Hablemos',
      imageAlt: 'Ilustración de una computadora',
    },
    stats: {
      projectsLabel: 'proyectos entregados',
      frentesLabel: 'frentes de actuación, de sitios a automatización',
      remoteLabel: 'remoto, en cualquier zona horaria',
    },
    services: {
      title: 'Servicios',
      subtitle: 'Cinco frentes, un solo equipo cuidando todo de punta a punta.',
      sites: {
        icon: 'Sitios',
        meta: 'Web · Sitios & landing pages',
        title: 'Creación de sitios web',
        desc: 'Sitios institucionales, landing pages y tiendas virtuales rápidos, responsivos y construidos para convertir — no solo para existir.',
        tools: ['HTML5 & CSS3', 'React / Next.js'],
      },
      data: {
        icon: 'Análisis de Datos',
        meta: 'Análisis de Datos · Dashboards',
        title: 'Análisis de Datos & apps interactivas',
        desc: 'Transformamos datos brutos en dashboards y aplicaciones interactivas que tu equipo realmente usa para decidir.',
        tools: ['Python', 'SQL', 'D3 / Plotly'],
      },
      bigdata: {
        icon: 'Big Data',
        meta: 'Datos · Infraestructura',
        title: 'Big data',
        desc: 'Arquitecturas para recolectar, almacenar y procesar grandes volúmenes de datos con performance y costo bajo control.',
        tools: ['Spark', 'Airflow', 'BigQuery / AWS'],
      },
      social: {
        icon: 'Social',
        meta: 'Marketing · Redes sociales',
        title: 'Gestión de redes sociales',
        desc: 'Planificación de contenido, producción y gestión de redes sociales para que tu marca crezca con consistencia.',
        tools: ['Calendario editorial', 'Meta Ads', 'Reportes mensuales'],
      },
      automation: {
        icon: 'Automatización',
        meta: 'Operaciones · Automatización',
        title: 'Automatización de procesos',
        desc: 'Flujos automatizados que eliminan tareas repetitivas y liberan a tu equipo para lo que realmente importa.',
        tools: ['Zapier / n8n', 'Python', 'Integraciones vía API'],
      },
    },
    process: {
      title: 'Cómo trabajamos',
      subtitle: 'Un proceso simple, desde el primer diagnóstico hasta el soporte posterior al lanzamiento.',
      step1: { title: 'Diagnóstico', desc: 'Entendemos tu negocio, el problema real y dónde la tecnología puede ayudar más rápido.' },
      step2: { title: 'Propuesta', desc: 'Diseñamos un plan claro, con alcance, plazos e inversión definidos antes de comenzar.' },
      step3: { title: 'Desarrollo', desc: 'Construimos en ciclos cortos, con entregas visibles y espacio para ajustes en el camino.' },
      step4: { title: 'Soporte continuo', desc: 'Después del lanzamiento, seguimos cerca: mantenimiento, mejoras y nuevos frentes cuando tenga sentido.' },
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Un ejemplo de lo que entregamos cuando los datos y la visualización se encuentran.',
      case: {
        meta: 'Análisis de datos · R · RPubs',
        title: 'Russo-Ukrainian War Analysis',
        desc: 'Análisis exploratorio de la Guerra Rusia-Ucrania utilizando datos públicos de Kaggle. El proyecto examina pérdidas de equipos, bajas de personal, prisioneros de guerra y heridos, usando R, tidyverse y Plotly para generar visualizaciones interactivas.',
        tools: ['R', 'tidyverse', 'Plotly', 'Kaggle'],
        cta: 'Ver proyecto en RPubs',
        imageAlt: 'Vista previa del proyecto Russo-Ukrainian War Analysis',
      },
    },
    about: {
      title: 'Sobre Dolphin Developer',
      p1: '¿Por qué un delfín? Los delfines son rápidos, inteligentes y trabajan en grupo — exactamente como nos gusta construir tecnología: con agilidad, inteligencia aplicada y un equipo reducido detrás de cada proyecto.',
      p2: 'Dolphin Developer nació para ser el socio técnico de empresas que necesitan tecnología seria sin la burocracia de una gran agencia.',
      imageAlt: 'Ilustración de una computadora',
    },
    contact: {
      title: 'Hablemos',
      subtitle: 'Cuéntanos un poco sobre tu proyecto — respondemos en hasta dos días hábiles.',
      nameLabel: 'Nombre',
      emailLabel: 'Correo electrónico',
      messageLabel: 'Mensaje',
      submit: 'Enviar mensaje',
      errors: {
        name: 'Ingresa tu nombre.',
        email: 'Ingresa un correo electrónico válido.',
        message: 'Cuéntanos un poco más — al menos 10 caracteres.',
        fixFields: 'Corrige los campos destacados.',
        sending: 'Enviando…',
        success: 'Recibimos tu mensaje — respondemos en hasta dos días hábiles.',
      },
    },
    footer: { text: 'Dolphin Developer — tecnología con agilidad.' },
  },
};

const i18n = {
  currentLang: 'en',

  getNested(obj, path) {
    return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);
  },

  setLang(lang) {
    if (!translations[lang]) return;
    this.currentLang = lang;
    localStorage.setItem('dolphin-lang', lang);
    this.apply();
    this.updateSelector();
  },

  apply() {
    const t = translations[this.currentLang];
    document.documentElement.lang = this.currentLang === 'pt' ? 'pt-BR' : this.currentLang === 'es' ? 'es' : 'en';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = this.getNested(t, key);
      if (value === undefined) return;

      const attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, value);
      } else if (Array.isArray(value)) {
        el.innerHTML = value.map((item) => `<li>${item}</li>`).join('');
      } else {
        el.textContent = value;
      }
    });

    // Update document title and meta description
    document.title = this.getNested(t, 'meta.title') || document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = this.getNested(t, 'meta.description') || metaDesc.content;
  },

  init() {
    const saved = localStorage.getItem('dolphin-lang');
    const initial = saved && translations[saved] ? saved : 'en';
    this.currentLang = initial;
    this.apply();
    this.bindSelector();
    this.updateSelector();
  },

  bindSelector() {
    const toggle = document.querySelector('.lang-switcher__toggle');
    const menu = document.querySelector('.lang-switcher__menu');
    if (!toggle || !menu) return;

    const close = () => {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };

    const open = () => {
      menu.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    };

    toggle.addEventListener('click', () => {
      menu.classList.contains('is-open') ? close() : open();
    });

    menu.querySelectorAll('[data-lang]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.setLang(btn.getAttribute('data-lang'));
        close();
      });
    });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.lang-switcher')) close();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') close();
    });
  },

  updateSelector() {
    const toggleLabel = document.querySelector('.lang-switcher__label');
    const menu = document.querySelector('.lang-switcher__menu');
    if (!toggleLabel || !menu) return;

    const labels = { en: 'English', pt: 'Português', es: 'Español' };
    toggleLabel.textContent = labels[this.currentLang];

    menu.querySelectorAll('[data-lang]').forEach((btn) => {
      const selected = btn.getAttribute('data-lang') === this.currentLang;
      btn.setAttribute('aria-selected', selected ? 'true' : 'false');
    });
  },
};

i18n.init();

// ---------------------------------------------
// Mobile menu
// ---------------------------------------------
const menuToggle = document.querySelector('.nav__menu-toggle');
const navMenu = document.querySelector('.nav__menu');

if (menuToggle && navMenu) {
  const closeMenu = () => {
    navMenu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', i18n.getNested(translations[i18n.currentLang], 'nav.menuOpen') || 'Open menu');
  };

  const openMenu = () => {
    navMenu.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', i18n.getNested(translations[i18n.currentLang], 'nav.menuClose') || 'Close menu');
  };

  menuToggle.addEventListener('click', () => {
    navMenu.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  navMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav') && navMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

// ---------------------------------------------
// Nav: shrink/border state on scroll
// ---------------------------------------------
const nav = document.getElementById('nav');

const setNavState = () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 8);
};
setNavState();
window.addEventListener('scroll', setNavState, { passive: true });

// ---------------------------------------------
// Smooth scroll for internal anchor links
// ---------------------------------------------
const navHeight = () => nav.getBoundingClientRect().height;

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    event.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight() - 12;
    window.scrollTo({ top, behavior: 'smooth' });
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
});

// ---------------------------------------------
// Scroll reveal via IntersectionObserver
// ---------------------------------------------
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// ---------------------------------------------
// Contact form: lightweight client-side validation
// ---------------------------------------------
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

const validators = {
  name: (value) => value.trim().length > 1 || i18n.getNested(translations[i18n.currentLang], 'contact.errors.name'),
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || i18n.getNested(translations[i18n.currentLang], 'contact.errors.email'),
  message: (value) => value.trim().length > 9 || i18n.getNested(translations[i18n.currentLang], 'contact.errors.message'),
};

const validateField = (field) => {
  const input = form.elements[field];
  const wrapper = input.closest('.field');
  const errorEl = document.getElementById(`${field}-error`);
  const result = validators[field](input.value);

  if (result === true) {
    wrapper.classList.remove('has-error');
    errorEl.textContent = '';
    return true;
  }

  wrapper.classList.add('has-error');
  errorEl.textContent = result;
  return false;
};

if (form) {
  Object.keys(validators).forEach((field) => {
    form.elements[field].addEventListener('blur', () => validateField(field));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const results = Object.keys(validators).map((field) => validateField(field));
    const isValid = results.every(Boolean);

    if (!isValid) {
      statusEl.textContent = i18n.getNested(translations[i18n.currentLang], 'contact.errors.fixFields');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    statusEl.textContent = i18n.getNested(translations[i18n.currentLang], 'contact.errors.sending');

    setTimeout(() => {
      statusEl.textContent = i18n.getNested(translations[i18n.currentLang], 'contact.errors.success');
      form.reset();
      submitBtn.disabled = false;
    }, 700);
  });
}
