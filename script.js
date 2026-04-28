function checkFields() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  document.getElementById('sign-in-btn').disabled = !(email && password);
}

function showScreen(screen) {
  const el = document.getElementById('screen-' + screen);
  if (!el) return;
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}

function navigate(screen) {
  location.hash = screen;
}

window.addEventListener('hashchange', () => {
  showScreen(location.hash.slice(1) || 'login');
});

showScreen(location.hash.slice(1) || 'login');

function toggleSidebar() {
  const wrap = document.getElementById('sidebar-wrap');
  wrap.classList.toggle('collapsed');
  if (wrap.classList.contains('collapsed')) {
    wrap.classList.add('no-hover');
    wrap.addEventListener('mouseleave', function() {
      wrap.classList.remove('no-hover');
    }, { once: true });
  }
}
