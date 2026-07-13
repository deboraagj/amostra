/**
 * ============================================================
 * CAROUSEL.JS — Carrossel de depoimentos
 * ============================================================
 */

export function initCarousel() {
  const track = document.getElementById('carousel-track');
  const dotsWrap = document.getElementById('carousel-dots');
  const btnPrev = document.getElementById('carousel-prev');
  const btnNext = document.getElementById('carousel-next');

  if (!track) return;

  let current = 0;
  let autoTimer;
  const INTERVAL = 5000;

  const getSlides = () => track.querySelectorAll('.carousel__slide');
  const getDots = () => dotsWrap?.querySelectorAll('.carousel__dot') || [];

  function goTo(index) {
    const slides = getSlides();
    const dots = getDots();
    const total = slides.length;

    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;

    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => goTo(current + 1), INTERVAL);
  }

  function stopAuto() {
    clearInterval(autoTimer);
  }

  // Botões
  btnPrev?.addEventListener('click', () => { goTo(current - 1); startAuto(); });
  btnNext?.addEventListener('click', () => { goTo(current + 1); startAuto(); });

  // Dots — delegação (pois são gerados dinamicamente)
  dotsWrap?.addEventListener('click', e => {
    const dot = e.target.closest('.carousel__dot');
    if (!dot) return;
    goTo(Number(dot.dataset.index));
    startAuto();
  });

  // Touch/swipe
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
    startAuto();
  });

  // Pausa no hover
  track.closest('.carousel')?.addEventListener('mouseenter', stopAuto);
  track.closest('.carousel')?.addEventListener('mouseleave', startAuto);

  startAuto();
}
