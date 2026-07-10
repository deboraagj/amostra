/**
 * MAIN.JS — Inicializa todos os módulos
 */
import { initNav } from './modules/nav.js';
import { buildSections, initLightbox } from './modules/builder.js';
import { initCarousel } from './modules/carousel.js';
import { initAnimations, initRipple } from './modules/animations.js';
import { initTreatments } from './modules/treatments.js';

document.addEventListener('DOMContentLoaded', () => {
  buildSections();
  initNav();
  initCarousel();
  initTreatments();
  initLightbox();
  initAnimations();
  initRipple();

  // Ano no rodapé
  const yr = document.getElementById('footer-year');
  if (yr) yr.textContent = new Date().getFullYear();
});