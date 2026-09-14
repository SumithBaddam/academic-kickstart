// Highlight the active section in the sidebar nav as the user scrolls
const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section, main footer');

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links.forEach((l) => l.classList.remove('active'));
      const active = document.querySelector(`nav a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: "-40% 0px -50% 0px" });

sections.forEach((s) => io.observe(s));

// Show/hide the additional projects
const toggle = document.getElementById('moreToggle');
const more = document.getElementById('moreProjects');

if (toggle && more) {
  toggle.addEventListener('click', () => {
    const isHidden = more.hasAttribute('hidden');
    if (isHidden) {
      more.removeAttribute('hidden');
      toggle.textContent = 'Show fewer projects';
      toggle.setAttribute('aria-expanded', 'true');
    } else {
      more.setAttribute('hidden', '');
      toggle.textContent = 'Show 7 more projects';
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
