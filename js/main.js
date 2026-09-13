// ---------------------------------------------
// Nav: shrink/border state on scroll
// ---------------------------------------------
const nav = document.getElementById('nav');

const setNavState = () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 8);
};
setNavState();
window.addEventListener('scroll', setNavState, { passive: true });

// ---------------------------------------------
// Smooth scroll for internal anchor links
// (native CSS scroll-behavior covers most cases;
// this adds a small offset for the sticky nav)
// ---------------------------------------------
const navHeight = () => nav.getBoundingClientRect().height;

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    event.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight() - 12;
    window.scrollTo({ top, behavior: 'smooth' });
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
});

// ---------------------------------------------
// Scroll reveal via IntersectionObserver
// ---------------------------------------------
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: show everything immediately
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// ---------------------------------------------
// Contact form: lightweight client-side validation
// ---------------------------------------------
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

const validators = {
  name: (value) => value.trim().length > 1 || 'Enter your name.',
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || 'Enter a valid email address.',
  message: (value) => value.trim().length > 9 || 'Say a little more — at least 10 characters.',
};

const validateField = (field) => {
  const input = form.elements[field];
  const wrapper = input.closest('.field');
  const errorEl = document.getElementById(`${field}-error`);
  const result = validators[field](input.value);

  if (result === true) {
    wrapper.classList.remove('has-error');
    errorEl.textContent = '';
    return true;
  }

  wrapper.classList.add('has-error');
  errorEl.textContent = result;
  return false;
};

if (form) {
  Object.keys(validators).forEach((field) => {
    form.elements[field].addEventListener('blur', () => validateField(field));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const results = Object.keys(validators).map((field) => validateField(field));
    const isValid = results.every(Boolean);

    if (!isValid) {
      statusEl.textContent = 'Please fix the highlighted fields.';
      return;
    }

    // No backend is wired up yet — this simulates a send so the
    // interaction is complete. Replace with a real endpoint call.
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    statusEl.textContent = 'Sending…';

    setTimeout(() => {
      statusEl.textContent = 'Thanks — your message is on its way. I\'ll reply within a couple of days.';
      form.reset();
      submitBtn.disabled = false;
    }, 700);
  });
}
