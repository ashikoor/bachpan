document.getElementById('date').textContent = new Date().toLocaleDateString();

const darkToggle = document.getElementById('darkToggle');
const themeIcon = document.getElementById('theme-icon');
const sliderThemeIcon = document.getElementById('slider-theme-icon');
function setDarkMode(on) {
  if (on) {
    document.body.classList.add('dark');
    if (sliderThemeIcon) sliderThemeIcon.textContent = '🌙'; // Show moon in dark mode
    localStorage.setItem('bachpan-dark', '1');
  } else {
    document.body.classList.remove('dark');
    if (sliderThemeIcon) sliderThemeIcon.textContent = '☀️'; // Show sun in light mode
    localStorage.setItem('bachpan-dark', '0');
  }
}
darkToggle.addEventListener('change', e => setDarkMode(e.target.checked));
if (localStorage.getItem('bachpan-dark') === '1') {
  darkToggle.checked = true;
  setDarkMode(true);
} else {
  setDarkMode(false);
}

AOS.init({
  duration: 900,
  once: true,
  offset: 60,
  easing: 'ease-in-out'
});