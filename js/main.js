/* ============================================================
   STÉPHANE MAGRE — Main JavaScript
   ============================================================ */

/* ── Header scroll state ─────────────────────────────────── */
const header = document.querySelector('.header');

function updateHeader() {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 60);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

/* ── Hero image pan on load ──────────────────────────────── */
document.querySelectorAll('.hero__image img').forEach(img => {
  if (img.complete) img.classList.add('loaded');
  else img.addEventListener('load', () => img.classList.add('loaded'));
});

/* ── Mobile menu ─────────────────────────────────────────── */
const burger    = document.querySelector('.header__burger');
const mobileNav = document.querySelector('.mobile-nav');

if (burger && mobileNav) {
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    mobileNav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileNav.querySelectorAll('a, .mobile-nav__close').forEach(el => {
    el.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── Fade-in on scroll ───────────────────────────────────── */
const fadeEls = document.querySelectorAll('.fade-in');
if (fadeEls.length && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  fadeEls.forEach(el => io.observe(el));
} else {
  fadeEls.forEach(el => el.classList.add('visible'));
}

/* ── Lightbox ────────────────────────────────────────────── */
(function () {
  const items = document.querySelectorAll('[data-lightbox]');
  if (!items.length) return;
  const lb      = document.getElementById('lightbox');
  if (!lb) return;
  const lbImg   = lb.querySelector('.lightbox__img');
  const counter = lb.querySelector('.lightbox__counter');
  let images = [], idx = 0;

  items.forEach(el => {
    images.push({ src: el.dataset.lightbox, alt: el.dataset.alt || '' });
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', () => open(images.findIndex(i => i.src === el.dataset.lightbox)));
  });

  function open(i) { idx = i < 0 ? 0 : i; show(); lb.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function close() { lb.classList.remove('open'); document.body.style.overflow = ''; }
  function nav(d) { idx = (idx + d + images.length) % images.length; show(); }
  function show() {
    lbImg.style.opacity = '0';
    setTimeout(() => { lbImg.src = images[idx].src; lbImg.alt = images[idx].alt; lbImg.style.opacity = '1'; }, 160);
    if (counter) counter.textContent = `${idx + 1} / ${images.length}`;
  }

  lb.querySelector('.lightbox__close')?.addEventListener('click', close);
  lb.querySelector('.lightbox__prev')?.addEventListener('click', () => nav(-1));
  lb.querySelector('.lightbox__next')?.addEventListener('click', () => nav(1));
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') nav(-1);
    if (e.key === 'ArrowRight') nav(1);
  });
})();

/* ── Active nav link ─────────────────────────────────────── */
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.header__nav a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    a.classList.toggle('active', href === page || (!page && href === 'index.html'));
  });
})();
