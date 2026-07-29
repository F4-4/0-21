// Theme was already applied in <head> (from localStorage, or system
// preference if nothing's saved yet) — this just wires up the toggle
// button so the user can switch themes for the rest of the session.
const root = document.documentElement;

const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
