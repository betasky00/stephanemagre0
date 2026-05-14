/* ============================================================
   STÉPHANE MAGRE — Main JavaScript
   ============================================================ */

/* ── Header scroll state ─────────────────────────────────── */
const header = document.querySelector('.header');

function updateHeader() {
  if (!header) return;
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

/* ── Hero image pan on load ──────────────────────────────── */
document.querySelectorAll('.hero__image img').forEach(img => {
  if (img.complete) {
    img.classList.add('loaded');
  } else {
    img.addEventListener('load', () => img.classList.add('loaded'));
  }
});

/* ── Mobile menu ─────────────────────────────────────────── */
const burger  = document.querySelector('.header__burger');
const mobileNav = document.querySelector('.mobile-nav');

if (burger && mobileNav) {
  burger.addEventListener('click', () => {
    const isOpen = burger.classList.toggle('open');
    mobileNav.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  const closeBtn = mobileNav.querySelector('.mobile-nav__close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
}

/* ── Fade-in on scroll ───────────────────────────────────── */
const fadeEls = document.querySelectorAll('.fade-in');

if (fadeEls.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  fadeEls.forEach(el => observer.observe(el));
} else {
  fadeEls.forEach(el => el.classList.add('visible'));
}

/* ── Lightbox ────────────────────────────────────────────── */
(function () {
  const galleryItems = document.querySelectorAll('[data-lightbox]');
  if (!galleryItems.length) return;

  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lightboxImg   = lightbox.querySelector('.lightbox__img');
  const closeBtn      = lightbox.querySelector('.lightbox__close');
  const prevBtn       = lightbox.querySelector('.lightbox__prev');
  const nextBtn       = lightbox.querySelector('.lightbox__next');
  const counterEl     = lightbox.querySelector('.lightbox__counter');

  let images = [];
  let current = 0;

  galleryItems.forEach(el => {
    const src  = el.getAttribute('data-lightbox');
    const alt  = el.getAttribute('data-alt') || '';
    images.push({ src, alt });

    el.addEventListener('click', () => {
      const idx = images.findIndex(i => i.src === src);
      openLightbox(idx >= 0 ? idx : 0);
    });
  });

  function openLightbox(idx) {
    current = idx;
    showImage(current);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showImage(idx) {
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
      lightboxImg.src = images[idx].src;
      lightboxImg.alt = images[idx].alt;
      lightboxImg.style.opacity = '1';
      if (counterEl) counterEl.textContent = `${idx + 1} / ${images.length}`;
    }, 180);
  }

  function navigate(dir) {
    current = (current + dir + images.length) % images.length;
    showImage(current);
  }

  closeBtn && closeBtn.addEventListener('click', closeLightbox);
  prevBtn  && prevBtn.addEventListener('click',  () => navigate(-1));
  nextBtn  && nextBtn.addEventListener('click',  () => navigate(1));

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   navigate(-1);
    if (e.key === 'ArrowRight')  navigate(1);
  });
})();

/* ── Active nav link ─────────────────────────────────────── */
(function () {
  const links = document.querySelectorAll('.header__nav a, .mobile-nav a');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();
