window.addEventListener('load', function () {
  var theme = localStorage.getItem('theme');
  // when first load, choose an initial theme
  if (theme === null || theme === undefined) {
    theme = 'light';
    localStorage.setItem('theme', theme);
  }
  // set theme
  var html = document.querySelector("html");
  html.setAttribute("data-theme", theme);
  // set btn inner text
  var toggleThemeBtn = document.getElementById("toggle-theme-btn");
})

function toggleTheme() {
  var theme = document.querySelector("html").getAttribute("data-theme");
  var newTheme = theme === "light" ? "dark" : "light";
  document.querySelector("html").setAttribute("data-theme", newTheme);
  theme = newTheme;
  localStorage.setItem('theme', newTheme);

  var toggleThemeBtn = document.getElementById("toggle-theme-btn");
}

var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var theme = localStorage.getItem('theme');
  var navbar = document.getElementById("navbar")
  height = navbar.getBoundingClientRect().height;
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-" + height + "px";
    navbar.style.borderBottom = "1px solid var(--color-top-border)";
  }
  prevScrollpos = currentScrollPos;
  if (currentScrollPos <= 5) {
    navbar.style.borderBottom = ".5px solid rgba(0,0,0,0)";
  }
}