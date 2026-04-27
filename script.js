function checkFields() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  document.getElementById('sign-in-btn').disabled = !(email && password);
}

function navigate(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + screen).classList.add('active');
}

function toggleSidebar() {
  document.getElementById('sidebar-wrap').classList.toggle('collapsed');
}
