/**
 * BUILDER.JS — Constrói conteúdo dinâmico a partir de content.js
 */

export function buildSections() {
  buildSpecialties();
  buildTreatments();
  buildTestimonials();
  buildContact();
}

/* ---- ÁREAS DE ATUAÇÃO ---- */
function buildSpecialties() {
  const main = document.getElementById('spec-main-grid');
  if (main) {
    main.innerHTML = CONTENT.especialidadesPrincipais.map((esp, i) => {
      return `
        <div class="spec-main-card reveal reveal-delay-${i + 1}">
          <div class="spec-main-card__body">
            <h3 class="spec-main-card__name">${esp.nome}</h3>
            <p class="spec-main-card__desc">${esp.desc}</p>
          </div>
          ${esp.destaque ? `<span class="spec-main-card__badge">${esp.destaque}</span>` : ''}
        </div>`;
    }).join('');
  }

  const posop = document.getElementById('posop-list');
  if (posop) {
    posop.innerHTML = CONTENT.posOperatorio.map((item, i) => `
      <div class="posop-item reveal reveal-delay-${i + 1}">
        <div class="posop-item__num">${item.num}</div>
        <div class="posop-item__content">
          <h3 class="posop-item__name">${item.nome}</h3>
        </div>
      </div>`).join('');
  }
}

/* ---- TRATAMENTOS ---- */
function buildTreatments() {
  const track = document.getElementById('treatments-track');
  const dots = document.getElementById('treatments-dots');
  if (!track) return;

  track.innerHTML = CONTENT.tratamentos.map(t => `
    <div class="treatment-card" data-id="${t.id}" data-nome="${t.nome}" role="button" tabindex="0">
      <div class="treatment-card__img">
        ${t.capa
      ? `<img src="${t.capa}" alt="${t.nome}" loading="lazy" decoding="async">` 
      : `<div class="treatment-card__placeholder">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                 <rect x="3" y="3" width="18" height="18" rx="3"/>
                 <circle cx="8.5" cy="8.5" r="1.5"/>
                 <path d="M21 15l-5-5L5 21"/>
               </svg>
               <span>Adicionar foto</span>
             </div>`}
        <div class="treatment-card__overlay">
          <span class="treatment-card__overlay-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            Ver galeria
          </span>
        </div>
      </div>
      <div class="treatment-card__body">
        <h3 class="treatment-card__name">${t.nome}</h3>
        <p class="treatment-card__desc">${t.desc}</p>
        <p class="treatment-card__count">${t.galeria.length} foto${t.galeria.length !== 1 ? 's' : ''} neste caso</p>
      </div>
    </div>`).join('');

  if (dots) {
    dots.innerHTML = CONTENT.tratamentos.map((_, i) =>
      `<button class="treatments__dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Tratamento ${i + 1}"></button>`
    ).join('');
  }

  // Eventos dos cards → abrir lightbox
  track.querySelectorAll('.treatment-card').forEach(card => {
    const open = () => openLightbox(card.dataset.id);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
  });
}

/* ---- LIGHTBOX ---- */
function openLightbox(id) {
  const item = CONTENT.tratamentos.find(t => t.id === id);
  if (!item) return;

  const lb = document.getElementById('lightbox');

  if (!lb) {
    alert("Ops! O JavaScript funcionou, mas não encontrou o HTML do #lightbox na página. Verifique se você colou a estrutura da galeria no index.html!");
    return;
  }

  let current = 0;
  const fotos = item.galeria;

  // Título
  lb.querySelector('.lightbox__title').textContent = item.nome;

  // Thumbs
  const thumbsEl = lb.querySelector('.lightbox__thumbs');
  thumbsEl.innerHTML = fotos.map((src, i) => `
    <div class="lightbox__thumb ${i === 0 ? 'active' : ''}" data-i="${i}">
      ${src ? `<img src="${src}" alt="Foto ${i + 1}" loading="lazy">` : `<span>${i + 1}</span>`}
    </div>`).join('');

  // Função de render
  const render = (i) => {
    current = i;
    const imgWrap = lb.querySelector('.lightbox__img-wrap');
    const src = fotos[i];
    imgWrap.innerHTML = src
      ? `<img class="lightbox__img" src="${src}" alt="${item.nome} — foto ${i + 1}">`
      : `<div class="lightbox__img-placeholder">
           <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
             <rect x="3" y="3" width="18" height="18" rx="3"/>
             <circle cx="8.5" cy="8.5" r="1.5"/>
             <path d="M21 15l-5-5L5 21"/>
           </svg>
           <span>assets/images/tratamentos/${id}-${i + 1}.jpg</span>
         </div>`;
    thumbsEl.querySelectorAll('.lightbox__thumb').forEach((t, ti) => t.classList.toggle('active', ti === i));
  };

  thumbsEl.querySelectorAll('.lightbox__thumb').forEach(t => {
    t.addEventListener('click', () => render(Number(t.dataset.i)));
  });

  lb.querySelector('#lb-prev').onclick = () => render((current - 1 + fotos.length) % fotos.length);
  lb.querySelector('#lb-next').onclick = () => render((current + 1) % fotos.length);

  // SUPORTE A SWIPE (DESLIZAR O DEDO NO MOBILE)
  const lightboxMain = lb.querySelector('.lightbox__main');
  let touchStartX = 0;
  let touchEndX = 0;

  lightboxMain.ontouchstart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  lightboxMain.ontouchend = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) {
      render((current + 1) % fotos.length);
    } else if (swipeDistance < -minSwipeDistance) {
      render((current - 1 + fotos.length) % fotos.length);
    }
  };

  render(0);
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Teclado
  lb._keyHandler = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') render((current - 1 + fotos.length) % fotos.length);
    if (e.key === 'ArrowRight') render((current + 1) % fotos.length);
  };
  document.addEventListener('keydown', lb._keyHandler);
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('open');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', lb._keyHandler);
}

export function initLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;

  lb.querySelector('.lightbox__close')?.addEventListener('click', closeLightbox);
  // Fechar ao clicar fora da imagem
  lb.addEventListener('click', e => {
    if (e.target === lb) closeLightbox();
  });
}

/* ---- DEPOIMENTOS ---- */
function buildTestimonials() {
  const track = document.getElementById('carousel-track');
  if (!track) return;

  const items = CONTENT.depoimentos;
  const perSlide = 2;
  const slides = [];
  for (let i = 0; i < items.length; i += perSlide) {
    slides.push(items.slice(i, i + perSlide));
  }

  track.innerHTML = slides.map(pair => `
    <div class="carousel__slide">
      ${pair.map(dep => `
        <div class="review-card">
          <div class="review-card__stars">${'★'.repeat(dep.estrelas)}</div>
          <p class="review-card__text">${dep.texto}</p>
          <div class="review-card__author">
            <div class="review-card__avatar">${dep.nome.charAt(0)}</div>
            <div>
              <p class="review-card__name">${dep.nome}</p>
              <p class="review-card__source">Google Reviews</p>
            </div>
          </div>
        </div>`).join('')}
    </div>`).join('');

  const dotsEl = document.getElementById('carousel-dots');
  if (dotsEl) {
    dotsEl.innerHTML = slides.map((_, i) =>
      `<button class="carousel__dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Slide ${i + 1}"></button>`
    ).join('');
  }
}

/* ---- CONTATO ---- */
function buildContact() {
  const grid = document.getElementById('contact-grid');
  if (!grid) return;

  const c = CONTENT.contato;

  // Link usando o protocolo universal mailto: para abrir o app nativo
  const emailLink = "mailto:rebecaaragao.fisio@gmail.com?subject=Gostaria%20de%20saber%20mais%20sobre%20a%20fisioterapia%20bucomaxilofacial&body=Olá,%20Rebeca!%0A%0ATenho%20interesse%20em%20conhecer%20mais%20sobre%20o%20tratamento%20de%20fisioterapia%20bucomaxilofacial.%20Gostaria%20de%20entender%20como%20funciona%20o%20tratamento,%20quais%20são%20as%20indicações%20e%20como%20posso%20agendar%20uma%20avaliação.%0A%0AFico%20no%20aguardo!";

  const cards = [
    { icon: 'whatsapp', label: 'WhatsApp', value: c.whatsappNum, sub: 'Clique para conversar', href: c.whatsapp },
    { icon: 'phone', label: 'Telefone', value: c.telefone, sub: 'Ligue para nós', href: `tel:${c.telefone.replace(/\D/g, '')}` },
    { icon: 'instagram', label: 'Instagram', value: '@fisio_rebecaaragao', sub: 'Siga nossas novidades', href: c.instagram },
    { icon: 'email', label: 'E-mail', value: 'rebecaaragao.fisio@gmail.com', sub: 'Envie uma mensagem', href: emailLink },
    { icon: 'location', label: 'Localização', value: c.endereco, sub: 'Ver no mapa', href: c.googleMaps },
    { icon: 'google', label: 'Google', value: 'Avalie no Google', sub: 'Sua opinião importa', href: c.google },
  ];

  grid.innerHTML = cards.map((card, i) => {
    // Regra de ouro para mobile: links de email (mailto) e telefone (tel) não devem abrir em nova aba
    const targetAba = card.href.startsWith('mailto:') || card.href.startsWith('tel:') ? '_self' : '_blank';

    return `
    <a class="contact-card reveal reveal-delay-${(i % 3) + 1}"
       href="${card.href}" target="${targetAba}" rel="noopener noreferrer"
       aria-label="${card.label}: ${card.value}">
      <div class="contact-card__icon">${ICONS[card.icon] || ''}</div>
      <div>
        <p class="contact-card__label">${card.label}</p>
        <p class="contact-card__value">${card.value}</p>
        <p class="contact-card__sub">${card.sub}</p>
      </div>
    </a>`;
  }).join('');
}