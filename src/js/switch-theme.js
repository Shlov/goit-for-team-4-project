const toggleTheme = document.querySelector('.toggle');
const toggleDarkOrLight = document.querySelector('.theme__dark');

toggleTheme.addEventListener('click', onSwitchBtn);
if (localStorage.getItem('theme') === 'dark') {
  toggleDarkOrLight.textContent = 'dark';
  document.body.classList.toggle('dark-theme');
  toggleTheme.classList.toggle('toggle__light');
}
function onSwitchBtn(evt) {
  const getToggleDarkOrLight = toggleDarkOrLight.textContent;

  document.body.classList.toggle('dark-theme');

  toggleTheme.classList.toggle('toggle__light');

  if (getToggleDarkOrLight === 'light') {
    toggleDarkOrLight.textContent = 'dark';
  } else {
    toggleDarkOrLight.textContent = 'light';
  }
  localStorage.setItem('theme', toggleDarkOrLight.textContent);
}
