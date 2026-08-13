/**
 * Main Javascript Entry Point
 */

import { initHeroDashboard } from './heroDashboard.js';
import { initWorkflow } from './workflow.js';
import { initFullDashboard } from './dashboard.js';
import { initIoTCanvas } from './iotCanvas.js';
import { initSkillsAndTimeline } from './timeline.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Submodules
  initHeroDashboard();
  initWorkflow();
  initFullDashboard();
  initIoTCanvas();
  initSkillsAndTimeline();

  // 1. Sticky Navbar & Mobile Drawer
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // ScrollSpy active link detection
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // 2. Scroll Reveal Intersection Observer
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  // 3. Contact Modal & Toast Notification
  const contactModal = document.getElementById('contactModal');
  const openModalBtns = document.querySelectorAll('[data-open-modal="contact"]');
  const closeModalBtns = document.querySelectorAll('[data-close-modal]');
  const contactForm = document.getElementById('contactForm');
  const toastElem = document.getElementById('toastMsg');

  function openContactModal() {
    if (contactModal) contactModal.classList.add('active');
  }

  function closeContactModal() {
    if (contactModal) contactModal.classList.remove('active');
  }

  openModalBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openContactModal();
  }));

  closeModalBtns.forEach(btn => btn.addEventListener('click', closeContactModal));

  if (contactModal) {
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) closeContactModal();
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeContactModal();
      showToast('Thank you! Your message has been sent to Asmaa Shaheen.');
      contactForm.reset();
    });
  }

  function showToast(message) {
    if (!toastElem) return;
    const toastText = toastElem.querySelector('.toast-text');
    if (toastText) toastText.textContent = message;

    toastElem.classList.add('show');
    setTimeout(() => {
      toastElem.classList.remove('show');
    }, 4500);
  }
});
