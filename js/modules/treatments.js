/**
 * TREATMENTS.JS — Scroll horizontal drag + dots para a seção de tratamentos
 */
export function initTreatments() {
    const track = document.getElementById('treatments-track');
    const dotsEl = document.getElementById('treatments-dots');
    const btnPrev = document.getElementById('treatments-prev');
    const btnNext = document.getElementById('treatments-next');
    if (!track) return;

    // Drag scroll
    let isDragging = false, startX = 0, scrollLeft = 0;
    track.addEventListener('mousedown', e => {
        isDragging = true;
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
        track.style.cursor = 'grabbing';
    });
    document.addEventListener('mouseup', () => {
        isDragging = false;
        track.style.cursor = 'grab';
    });
    track.addEventListener('mousemove', e => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        track.scrollLeft = scrollLeft - (x - startX);
    });

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
        const cardW = track.querySelector('.treatment-card')?.offsetWidth + 24 || 320;
        track.scrollBy({ left: dir * cardW, behavior: 'smooth' });
    };
    btnPrev?.addEventListener('click', () => scroll(-1));
    btnNext?.addEventListener('click', () => scroll(1));
}