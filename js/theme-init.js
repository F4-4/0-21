// Apply the saved theme immediately, before the page renders, so it
// carries over between pages and there's no flash of the wrong theme.
// Also syncs the theme-color meta tag so the mobile browser chrome
// (address bar, etc.) matches the page background.
//
// This file is loaded as a blocking (non-deferred, non-async) <script>
// in <head>, before any CSS/content — same timing as the inline block
// it replaces — so it still runs before first paint.
(function () {
  var stored = localStorage.getItem('theme');
  var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  document.addEventListener('DOMContentLoaded', function () {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#000000' : '#ffffff');
    var favicon = document.querySelector('link[rel="icon"]');
    if (favicon) favicon.setAttribute('href', theme === 'dark' ? './images/favicon-dark.png' : './images/favicon.png');
  });
})();
