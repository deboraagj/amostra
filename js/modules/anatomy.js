/**
 * ============================================================
 * ANATOMY.JS — Hotspots interativos na ilustração anatômica
 * ============================================================
 * Desktop: hover/click → linha conectora SVG + card lateral
 * Mobile:  tap → bottom sheet com a especialidade
 * ============================================================
 */

export function buildAnatomy() {
  const figure = document.getElementById('anatomy-figure');
  if (!figure) return;

  const items = CONTENT.especialidadesPrincipais;

  // ---- Hotspots sobre a imagem ----
  const hotspotsHTML = items.map(item => `
    <button class="hotspot"
            type="button"
            data-id="${item.id}"
            data-side="${item.side}"
            style="left:${item.position.x}%; top:${item.position.y}%;"
            aria-label="${item.nome}">
      <span class="hotspot__pulse" aria-hidden="true"></span>
      <span class="hotspot__dot" aria-hidden="true"></span>
      <span class="hotspot__label">${item.nome}</span>
    </button>
  `).join('');

  const svgConnectors = `
    <svg class="anatomy__connector-svg" id="anatomy-connectors">
      ${items.map(item => `<path class="anatomy__connector-path" data-id="${item.id}" d=""></path>`).join('')}
    </svg>`;

  figure.insertAdjacentHTML('beforeend', hotspotsHTML + svgConnectors);

  // ---- Cards laterais (desktop) ----
  const stage = document.getElementById('anatomy-stage');
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'anatomy__side-card';
    card.dataset.id = item.id;
    card.innerHTML = `
      <span class="anatomy__side-card__eyebrow">${item.nomeCompleto}</span>
      <h3 class="anatomy__side-card__title">${item.nome}</h3>
      <p class="anatomy__side-card__desc">${item.desc}</p>
      ${item.destaque ? `<span class="anatomy__side-card__badge">${item.destaque}</span>` : ''}
    `;
    stage.appendChild(card);
  });

  // ---- Legenda mobile (lista tocável abaixo da figura) ----
  const legend = document.getElementById('anatomy-legend');
  if (legend) {
    legend.innerHTML = items.map(item => `
      <button class="anatomy__legend-item" type="button" data-id="${item.id}">
        <span class="anatomy__legend-dot" aria-hidden="true"></span>
        ${item.nome}
      </button>
    `).join('');
  }

  // ---- Bottom sheet (mobile) ----
  const sheet = document.getElementById('anatomy-sheet');
  const backdrop = document.getElementById('anatomy-sheet-backdrop');

  function openSheet(item) {
    sheet.querySelector('.anatomy__sheet-eyebrow').textContent = item.nomeCompleto;
    sheet.querySelector('.anatomy__sheet-title').innerHTML =
      item.nome + (item.destaque ? `<span class="anatomy__sheet-badge">${item.destaque}</span>` : '');
    sheet.querySelector('.anatomy__sheet-desc').textContent = item.desc;
    sheet.classList.add('open');
    backdrop.classList.add('open');
  }
  function closeSheet() {
    sheet.classList.remove('open');
    backdrop.classList.remove('open');
  }
  backdrop?.addEventListener('click', closeSheet);
  sheet?.querySelector('.anatomy__sheet-handle')?.addEventListener('click', closeSheet);

  // ---- Estado ativo + interações ----
  let activeId = null;
  const isDesktop = () => window.matchMedia('(min-width: 861px)').matches;

  function drawConnector(item) {
    const svg = document.getElementById('anatomy-connectors');
    const path = svg.querySelector(`path[data-id="${item.id}"]`);
    if (!path) return;

    const figRect = figure.getBoundingClientRect();
    const x1 = (item.position.x / 100) * figRect.width;
    const y1 = (item.position.y / 100) * figRect.height;

    const sideCard = stage.querySelector(`.anatomy__side-card[data-id="${item.id}"]`);
    if (!sideCard) return;

    const cardWidth = 240;
    const gap = 48;
    let cardLeft, cardTop;
    const stageRect = stage.getBoundingClientRect();
    const figLeftInStage = figRect.left - stageRect.left;
    const figTopInStage  = figRect.top  - stageRect.top;

    if (item.side === 'left') {
      cardLeft = figLeftInStage + x1 - cardWidth - gap;
    } else {
      cardLeft = figLeftInStage + x1 + gap;
    }
    cardTop = figTopInStage + y1 - 40;

    sideCard.style.left = `${cardLeft}px`;
    sideCard.style.top  = `${Math.max(0, cardTop)}px`;

    const x2 = item.side === 'left' ? cardLeft + cardWidth - figLeftInStage : cardLeft - figLeftInStage;
    const y2 = (cardTop + 20) - figTopInStage;
    const midX = (x1 + x2) / 2;

    path.setAttribute('d', `M ${x1} ${y1} Q ${midX} ${y1}, ${x2} ${y2}`);
  }

  function setActive(id) {
    const item = items.find(i => i.id === id);
    if (!item) return;
    activeId = id;

    figure.querySelectorAll('.hotspot').forEach(h => h.classList.toggle('active', h.dataset.id === id));
    legend?.querySelectorAll('.anatomy__legend-item').forEach(l => l.classList.toggle('active', l.dataset.id === id));

    if (isDesktop()) {
      stage.querySelectorAll('.anatomy__side-card').forEach(c => c.classList.toggle('visible', c.dataset.id === id));
      document.querySelectorAll('.anatomy__connector-path').forEach(p => p.classList.toggle('visible', p.dataset.id === id));
      requestAnimationFrame(() => drawConnector(item));
    } else {
      openSheet(item);
    }
  }

  function clearActive() {
    activeId = null;
    figure.querySelectorAll('.hotspot').forEach(h => h.classList.remove('active'));
    stage.querySelectorAll('.anatomy__side-card').forEach(c => c.classList.remove('visible'));
    document.querySelectorAll('.anatomy__connector-path').forEach(p => p.classList.remove('visible'));
    legend?.querySelectorAll('.anatomy__legend-item').forEach(l => l.classList.remove('active'));
  }

  figure.querySelectorAll('.hotspot').forEach(hotspot => {
    const id = hotspot.dataset.id;

    if (isDesktop()) {
      hotspot.addEventListener('mouseenter', () => setActive(id));
      hotspot.addEventListener('focus', () => setActive(id));
    }
    hotspot.addEventListener('click', (e) => {
      e.preventDefault();
      if (activeId === id && isDesktop()) { clearActive(); return; }
      setActive(id);
    });
  });

  legend?.addEventListener('click', (e) => {
    const btn = e.target.closest('.anatomy__legend-item');
    if (!btn) return;
    setActive(btn.dataset.id);
  });

  if (isDesktop()) {
    stage?.addEventListener('mouseleave', () => clearActive());
  }

  window.addEventListener('resize', () => {
    if (activeId && isDesktop()) {
      const item = items.find(i => i.id === activeId);
      requestAnimationFrame(() => drawConnector(item));
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && isDesktop() && !activeId) {
        setTimeout(() => setActive(items[0].id), 500);
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });
  observer.observe(figure);
}

/* ---- Pós-operatório: navegação por setas no mobile (scroll) ---- */
export function initPosopNav() {
  const track = document.getElementById('posop-track');
  const prev  = document.getElementById('posop-prev');
  const next  = document.getElementById('posop-next');
  if (!track) return;

  const scrollByCard = (dir) => {
    const card = track.querySelector('.posop-card');
    const width = card ? card.offsetWidth + 24 : 280;
    track.scrollBy({ left: dir * width, behavior: 'smooth' });
  };
  prev?.addEventListener('click', () => scrollByCard(-1));
  next?.addEventListener('click', () => scrollByCard(1));
}