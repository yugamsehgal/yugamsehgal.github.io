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
  // toggleThemeBtn.innerText = theme === "light" ? "night mode: off" : "night mode: on";
})

function toggleTheme() {
  var theme = document.querySelector("html").getAttribute("data-theme");
  var newTheme = theme === "light" ? "dark" : "light";
  document.querySelector("html").setAttribute("data-theme", newTheme);
  theme = newTheme;
  localStorage.setItem('theme', newTheme);

  var toggleThemeBtn = document.getElementById("toggle-theme-btn");
  // toggleThemeBtn.innerText = theme === "light" ? "night mode: off" : "night mode: on";
}

// console.log(height);
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }


var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var navbar = document.getElementById("navbar")
  height = navbar.getBoundingClientRect().height;
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-" + height + "px";
  }
  prevScrollpos = currentScrollPos;
}