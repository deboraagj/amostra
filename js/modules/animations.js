/**
 * ============================================================
 * ANIMATIONS.JS — Scroll Reveal
 * ============================================================
 */

export function initAnimations() {
  // IntersectionObserver para elementos .reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  });

  // Observa todos os elementos .reveal presentes e futuros (MutationObserver)
  const observeAll = () => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  };

  // Observa o DOM para elementos adicionados dinamicamente (pelo builder.js)
  const mutObs = new MutationObserver(observeAll);
  mutObs.observe(document.body, { childList: true, subtree: true });

  observeAll();
}


/**
 * ============================================================
 * RIPPLE.JS — Efeito ripple nos botões
 * ============================================================
 */

export function initRipple() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn');
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;

    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
}
