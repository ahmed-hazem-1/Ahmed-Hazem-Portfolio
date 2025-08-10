'use strict';

// Mobile nav
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

// Active nav link on scroll
const sections = document.querySelectorAll('#about, #experience, #education, #projects, #skills, #contact');
const navLinks = document.querySelectorAll('.nav-link');
const setActiveLink = () => {
  let current = 'home';
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) current = sec.id;
  });
  navLinks.forEach(l => {
    l.classList.toggle('active', l.dataset.nav === current);
  });
};
window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    projectCards.forEach(card => {
      const ok = cat === 'all' || card.dataset.category === cat;
      card.style.display = ok ? '' : 'none';
    });
  });
});

// Form button enable/disable
const form = document.querySelector('[data-form]');
const inputs = document.querySelectorAll('[data-form] [data-form-input]');
const submitBtn = document.querySelector('[data-form-btn]');
const updateFormState = () => {
  if (!form || !submitBtn) return;
  submitBtn.disabled = !form.checkValidity();
};
inputs.forEach(i => i.addEventListener('input', updateFormState));
window.addEventListener('load', updateFormState);

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Performance: defer heavy images if needed
const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReduce.matches) {
  document.querySelectorAll('.project-card').forEach(c => c.style.transition = 'none');
}

// Lazy load LinkedIn embeds on demand
window.loadLinkedInEmbed = function(button){
  const placeholder = button.closest('.linkedin-embed-placeholder');
  const container = placeholder.parentElement;
  const iframe = container.querySelector('iframe.linkedin-embed');
  const src = button.getAttribute('data-src');
  button.disabled = true;
  button.textContent = 'Loading…';
  iframe.src = src;
  iframe.addEventListener('load', ()=>{
    placeholder.style.display = 'none';
  }, { once: true });
};

// Progressive image lazy-loading fallback
window.addEventListener('load', function(){
  document.querySelectorAll('img:not([loading])').forEach(img => img.setAttribute('loading','lazy'));
});