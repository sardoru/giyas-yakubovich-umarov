/* ============================================
   G.Ya. Umarov — Site Interactions
   ============================================ */

(function () {
  'use strict';

  // --- Theme Toggle ---
  const THEME_KEY = 'umarov-theme';

  function getPreferredTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.innerHTML = theme === 'dark' ? '&#9788;' : '&#9790;';
  }

  applyTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    // --- Mobile Menu ---
    const hamburger = document.querySelector('.nav__hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('active');
      });
      mobileMenu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          mobileMenu.classList.remove('open');
          hamburger.classList.remove('active');
        });
      });
    }

    // --- Header Show/Hide on Scroll ---
    var header = document.querySelector('.site-header');
    var lastScroll = 0;
    if (header) {
      window.addEventListener('scroll', function () {
        var current = window.pageYOffset;
        if (current > lastScroll && current > 100) {
          header.classList.add('hidden');
        } else {
          header.classList.remove('hidden');
        }
        lastScroll = current;
      }, { passive: true });
    }

    // --- Intersection Observer for Reveals ---
    var reveals = document.querySelectorAll('.reveal');
    if (reveals.length > 0 && 'IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      reveals.forEach(function (el) { observer.observe(el); });
    }

    // --- Hero Particles ---
    var particleContainer = document.querySelector('.hero__particles');
    if (particleContainer) {
      for (var i = 0; i < 40; i++) {
        var p = document.createElement('div');
        p.className = 'hero__particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (8 + Math.random() * 12) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        p.style.width = p.style.height = (1 + Math.random() * 3) + 'px';
        particleContainer.appendChild(p);
      }
    }

    // --- Stat counter animation ---
    var statNumbers = document.querySelectorAll('.hero__stat-number[data-count]');
    if (statNumbers.length > 0) {
      var counted = false;
      function animateCounters() {
        if (counted) return;
        counted = true;
        statNumbers.forEach(function (el) {
          var target = parseInt(el.getAttribute('data-count'), 10);
          var duration = 1800;
          var start = 0;
          var startTime = null;
          function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = target;
          }
          requestAnimationFrame(step);
        });
      }
      var heroObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) animateCounters();
      }, { threshold: 0.5 });
      var statsSection = document.querySelector('.hero__stats');
      if (statsSection) heroObserver.observe(statsSection);
    }
  });
})();
