(() => {
  'use strict';
  const config = window.ESSENCIA || {};
  document.querySelectorAll('[data-content]').forEach(el => {
    const value = config.content?.[el.dataset.content];
    if (typeof value === 'string') el.textContent = value;
  });
  document.querySelectorAll('[data-image]').forEach(img => {
    const value = config.images?.[img.dataset.image];
    if (value?.src) img.src = value.src;
    if (value?.alt) img.alt = value.alt;
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  const menu = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  const closeMenu = (focus = false) => {
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Abrir menu');
    links.classList.remove('open');
    if (focus) menu.focus();
  };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    links.classList.toggle('open', open);
  });
  links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', e => {if (e.key === 'Escape' && links.classList.contains('open')) closeMenu(true);});
  document.addEventListener('click', e => {if (!e.target.closest('.header')) closeMenu();});
  const desktop = matchMedia('(min-width:901px)');
  desktop.addEventListener('change', () => closeMenu());
  const header = document.querySelector('.header');
  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 35);
  window.addEventListener('scroll', updateHeader, {passive:true});
  updateHeader();
  // Native dialogs provide focus containment and Escape support.
  const showDialog = id => document.getElementById(id).showModal();
  document.querySelectorAll('[data-contact]').forEach(button => button.addEventListener('click', event => {
    event.preventDefault();
    const phone = String(config.whatsapp || '').replace(/\D/g, '');
    if (config.demo === false && /^\d{10,15}$/.test(phone)) {
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(config.whatsappMessage || '')}`, '_blank', 'noopener,noreferrer');
    } else showDialog('contact-dialog');
  }));
  document.querySelector('.privacy-trigger').addEventListener('click', () => showDialog('privacy-dialog'));
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.querySelectorAll('.dialog-close,.dialog-done').forEach(button => button.addEventListener('click', () => dialog.close()));
    dialog.addEventListener('click', e => {
      const r = dialog.getBoundingClientRect();
      if (e.target === dialog && (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)) dialog.close();
    });
  });
  // Open one topic per group while preserving native, keyboard-friendly disclosures.
  document.querySelectorAll('.topic-list,.faq-list').forEach(group => {
    group.querySelectorAll('details').forEach(item => item.addEventListener('toggle', () => {
      if (item.open) group.querySelectorAll('details').forEach(other => {if (other !== item) other.open = false;});
    }));
  });
  // Content remains readable without JS or IntersectionObserver.
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion:reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {entry.target.classList.add('visible');observer.unobserve(entry.target);}
    }), {threshold:0.07});
    document.documentElement.classList.add('motion-ready');
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
})();
(() => {
  const maps = window.ESSENCIA?.maps || {};
  const route = document.getElementById('map-route');
  if (maps.route && /^https:\/\/www\.google\.com\/maps\//.test(maps.route)) route.href = maps.route;
  document.getElementById('load-map').addEventListener('click', () => {
    if (!/^https:\/\/www\.google\.com\/maps\?/.test(maps.embed || '')) return;
    const iframe = document.createElement('iframe');
    iframe.title = 'Mapa ilustrativo da região de Maringá, Paraná';
    iframe.src = maps.embed;
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.allowFullscreen = true;
    document.getElementById('map-container').append(iframe);
    document.getElementById('map-placeholder').hidden = true;
  });
})();
