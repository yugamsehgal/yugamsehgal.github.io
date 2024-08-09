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
    navbar.style.boxShadow = theme === "dark" ? "0 1px 0 0 rgba(255,255,255,.2)" : "0 1px 0px 0 rgba(0,0,0,.2)";
  }
  prevScrollpos = currentScrollPos;
  if (currentScrollPos <= 10) {
    navbar.style.boxShadow = "0 0 0 0 rgba(0,0,0,0)";
  }
}