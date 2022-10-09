////////////////////////////////////////////////////////////////////////
/////////////////// Menubar
const menubar = document.getElementById("menubar");
const menubar__line = document.getElementById("menubar__line");

const navbar_mobile = document.getElementById("navbar_mobile");

menubar.addEventListener("click", function (e) {
  e.preventDefault();
  menubar__line.classList.toggle("u-hide-nav-line");
  navbar_mobile.classList.toggle("u-hidden");
});

/// closing the nav bar on every click
const homeNav = document.getElementById("homeNav");
const projectNav = document.getElementById("projectNav");
const certNav = document.getElementById("certNav");
const communityNav = document.getElementById("communityNav");
const contactNav = document.getElementById("contactNav");

homeNav.addEventListener("click", (e) => {
  e.preventDefault();
  menubar__line.classList.toggle("u-hide-nav-line");
  navbar_mobile.classList.toggle("u-hidden");
  location.assign('index.html')
});

projectNav.addEventListener("click", (e) => {
  e.preventDefault();
  menubar__line.classList.toggle("u-hide-nav-line");
  navbar_mobile.classList.toggle("u-hidden");
  location.assign('index.html#projects')
});

certNav.addEventListener("click", (e) => {
  e.preventDefault();
  menubar__line.classList.toggle("u-hide-nav-line");
  navbar_mobile.classList.toggle("u-hidden");
  
  location.assign('index.html#certificates')
});

communityNav.addEventListener("click", (e) => {
  e.preventDefault();
  menubar__line.classList.toggle("u-hide-nav-line");
  navbar_mobile.classList.toggle("u-hidden");
  location.assign('#')
});

contactNav.addEventListener("click", (e) => {
  e.preventDefault();
  menubar__line.classList.toggle("u-hide-nav-line");
  navbar_mobile.classList.toggle("u-hidden");
  location.assign('index.html#contact')
});