/**
 * TREATMENTS.JS — Scroll horizontal drag + dots para a seção de tratamentos
 */
export function initTreatments() {
    const track = document.getElementById('treatments-track');
    const dotsEl = document.getElementById('treatments-dots');
    const btnPrev = document.getElementById('treatments-prev');
    const btnNext = document.getElementById('treatments-next');
    if (!track) return;

    // Drag scroll com proteção inteligente para Cliques!
    let isDown = false;
    let startX;
    let scrollLeft;
    let isDragging = false; // Flag para diferenciar clique de arraste

    track.addEventListener('mousedown', (e) => {
        isDown = true;
        isDragging = false; // Reseta a flag ao tocar no mouse
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
        track.style.cursor = 'grabbing';
    });

    track.addEventListener('mouseleave', () => {
        isDown = false;
        track.style.cursor = 'grab';
    });

    track.addEventListener('mouseup', () => {
        isDown = false;
        track.style.cursor = 'grab';
    });

    track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        isDragging = true; // Se o mouse moveu enquanto pressionado, é um arraste!
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX);
        track.scrollLeft = scrollLeft - walk;
    });

    // O PULO DO GATO: Intercepta o clique. Se for arraste, ele cancela o clique. Se for clique puro, ele deixa passar para abrir a galeria.
    track.addEventListener('click', (e) => {
        if (isDragging) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, { capture: true });

    // Dot sync ao scroll
    const updateDots = () => {
        if (!dotsEl) return;
        const cardW = track.querySelector('.treatment-card')?.offsetWidth + 24 || 320;
        const idx = Math.round(track.scrollLeft / cardW);
        dotsEl.querySelectorAll('.treatments__dot').forEach((d, i) => d.classList.toggle('active', i === idx));
    };
    track.addEventListener('scroll', updateDots, { passive: true });

    // Dot click
    dotsEl?.addEventListener('click', e => {
        const dot = e.target.closest('.treatments__dot');
        if (!dot) return;
        const cardW = track.querySelector('.treatment-card')?.offsetWidth + 24 || 320;
        track.scrollTo({ left: Number(dot.dataset.index) * cardW, behavior: 'smooth' });
    });

    // Botões anterior/próximo
    const scroll = (dir) => {
        const cardW = track.querySelector('.treatment-card')?.offsetWidth || 340;
        const gap = parseInt(window.getComputedStyle(track).gap) || 24;
        track.scrollBy({ left: dir * (cardW + gap), behavior: 'smooth' });
    };
    btnPrev?.addEventListener('click', () => scroll(-1));
    btnNext?.addEventListener('click', () => scroll(1));
}