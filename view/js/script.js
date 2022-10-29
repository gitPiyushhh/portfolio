"use strict";

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
  location.assign('#')
});

projectNav.addEventListener("click", (e) => {
  e.preventDefault();
  menubar__line.classList.toggle("u-hide-nav-line");
  navbar_mobile.classList.toggle("u-hidden");
  location.assign('#projects')
});

certNav.addEventListener("click", (e) => {
  e.preventDefault();
  menubar__line.classList.toggle("u-hide-nav-line");
  navbar_mobile.classList.toggle("u-hidden");
  
  location.assign('#certificates')
});

communityNav.addEventListener("click", (e) => {
  e.preventDefault();
  menubar__line.classList.toggle("u-hide-nav-line");
  navbar_mobile.classList.toggle("u-hidden");
  location.assign('community.html')
});

contactNav.addEventListener("click", (e) => {
  e.preventDefault();
  menubar__line.classList.toggle("u-hide-nav-line");
  navbar_mobile.classList.toggle("u-hidden");
  location.assign('#contact')
});

////////////////////////////////////////////////////////////////////////
/////////////////// slider

const dot1 = document.getElementById("dot-1");
const dot2 = document.getElementById("dot-2");
const dot3 = document.getElementById("dot-3");

const testCard1 = document.getElementById("test-card-1");
const testCard2 = document.getElementById("test-card-2");
const testCard3 = document.getElementById("test-card-3");

dot1.addEventListener("click", function (e) {
  e.preventDefault();
  dot1.classList.add("testimonials__dot--active");
  dot2.classList.remove("testimonials__dot--active");
  dot3.classList.remove("testimonials__dot--active");
  testCard2.classList.add("u-hidden");
  testCard3.classList.add("u-hidden");
  testCard1.classList.remove("u-hidden");
});

dot2.addEventListener("click", function (e) {
  e.preventDefault();
  dot2.classList.add("testimonials__dot--active");
  dot1.classList.remove("testimonials__dot--active");
  dot3.classList.remove("testimonials__dot--active");
  testCard1.classList.add("u-hidden");
  testCard3.classList.add("u-hidden");
  testCard2.classList.remove("u-hidden");
});

dot3.addEventListener("click", function (e) {
  e.preventDefault();
  dot3.classList.add("testimonials__dot--active");
  dot2.classList.remove("testimonials__dot--active");
  dot1.classList.remove("testimonials__dot--active");
  testCard1.classList.add("u-hidden");
  testCard2.classList.add("u-hidden");
  testCard2.classList.remove("u-hidden");
});

/////////////////////////////////////////////
///////// Resume

const resume = document.getElementById("resume-btn");

// const resumeTimeout = setTimeout(linkOpen, 1000);

function linkOpen() {
  console.log("Link");
  resume.setAttribute("href", "./drawables/My resume (piyush) (6).pdf");
  window.location.href =
    "https://drive.google.com/file/d/1BL6SYl_y8mepaneLY8qbUcWYJfZGQuik/view";
}

resume.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.tagName == "A" && !e.target.hasAttribute("target")) {
    e.target.setAttribute("target", "_blank");
  }

  linkOpen();
});

/////////////////////////////////////////////////
///// Implementing the smooth scrolling

const btnScrollTo = document.querySelector("#projects_goto");
const projects = document.querySelector("#projects");

btnScrollTo.addEventListener("click", (e) => {
  const projCords = projects.getBoundingClientRect();

  window.scrollTo(projCords.left, projCords.top + window.pageYOffset);
});

const projectCard = document.getElementById("#projectCard");
const projectCard2 = document.getElementById("projectCard2");
const projectCard3 = document.getElementById("projectCard3");

const Certificate1 = document.getElementById("Certificate1");
const Certificate2 = document.getElementById("Certificate2");
const Certificate3 = document.getElementById("Certificate3");

const aboutCard1 = document.getElementById("aboutCard1");
const aboutCard2 = document.getElementById("aboutCard2");
const aboutCard3 = document.getElementById("aboutCard3");

const platform1 = document.getElementById("platform1");
const platform2 = document.getElementById("platform2");
const platform3 = document.getElementById("platform3");
const platform4 = document.getElementById("platform4");

projectCard.classList.add("i");
projectCard2.classList.add("i");
projectCard3.classList.add("i");

aboutCard1.classList.add("i");
aboutCard2.classList.add("i");
aboutCard3.classList.add("i");

Certificate1.classList.add("i");
Certificate2.classList.add("i");
Certificate3.classList.add("i");

platform1.classList.add("i");
platform2.classList.add("i");
platform3.classList.add("i");
platform4.classList.add("i");

window.addEventListener("scroll", function (e) {
  // console.log(window.pageYOffset)
  let start = parseInt(window.pageYOffset);
  console.log(start);
  if (start >= 1800) {
    projectCard.classList.add("i2");

    setTimeout(() => {
      projectCard2.classList.add("i2");
    }, 1000);

    setTimeout(() => {
      projectCard3.classList.add("i2");
    }, 2000);
  }

  if (start >= 350) {
    aboutCard1.classList.add("i2");

    setTimeout(() => {
      aboutCard2.classList.add("i2");
    }, 1000);

    setTimeout(() => {
      aboutCard3.classList.add("i2");
    }, 2000);
  }

  if (start >= 2800) {
    Certificate1.classList.add("i2");

    setTimeout(() => {
      Certificate2.classList.add("i2");
    }, 1000);

    setTimeout(() => {
      Certificate3.classList.add("i2");
    }, 2000);
  }

  if (start >= 3600) {
    platform1.classList.add("i2");

    setTimeout(() => {
      platform2.classList.add("i2");
    }, 1000);

    setTimeout(() => {
      platform3.classList.add("i2");
    }, 2000);

    setTimeout(() => {
      platform4.classList.add("i2");
    }, 3000);
  }
});

const navbar = document.getElementById("navbar");
const about = document.getElementById("about");

// about.classList.add('i');

const body = document.querySelector("body");

window.addEventListener("scroll", function (e) {
  // console.log(window.pageYOffset)
  let start2 = parseInt(window.pageYOffset);
  console.log(`start2: ${start2}`);

  // Navbar uplift animation
  if (start2 < 50) {
    navbar.style.transition = "all 0.5s ease";
    navbar.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
  }

  if (start2 >= 40) {
    navbar.style.backgroundColor = "#2D2E32";
    navbar.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
  }

  // All sections Show Animations
  // if (start2 >= 300 && start2 <= 1500) {
  // 	about.classList.add('i2')
  // }
});

/////////////////////////////////
//// Skills

const skillsContainer = document.getElementById("skills_contanier");
const skillsSkill = document.querySelectorAll(".skills_skill");

console.log(skillsSkill);

let cnt = 0;

[...skillsSkill].forEach(function (s) {
  s.addEventListener("mouseover", function (e) {
    e.preventDefault();
    skillsContainer.style.animationPlayState = "paused";
    s.style.transition = "all 0s";
  });

  s.addEventListener("mouseover", function (e) {
    e.preventDefault();
    skillsContainer.style.animationPlayState = "paused";
    s.style.transition = "all 0s";
  });

  s.addEventListener("mouseout", function (e) {
    e.preventDefault();
    skillsContainer.style.animationPlayState = "running";
    s.style.transition = "all 0s";
  });
});

// Hidden certificates
const hideBtnProjects = document.getElementById("projectHide");
const hideBtnCertificates = document.getElementById("certHide");

const hiddenProjects = document.getElementById("projectsHidden");
const hiddenCertificates = document.getElementById("certsHidden");
const hiddenCertificates2 = document.getElementById("certsHidden2");

hideBtnProjects.addEventListener("click", (e) => {
  e.preventDefault();
  hiddenProjects.classList.toggle("u-hidden");
  hideBtnProjects.innerHTML =
    hideBtnProjects.innerHTML === "VIEW LESS PROJECTS"
      ? "VIEW ALL PROJECTS"
      : "VIEW LESS PROJECTS";
});

hideBtnCertificates.addEventListener("click", (e) => {
  e.preventDefault();
  hiddenCertificates.classList.toggle("u-hidden");
  hiddenCertificates2.classList.toggle("u-hidden");
  hideBtnCertificates.innerHTML =
    hideBtnCertificates.innerHTML === "VIEW LESS CERTIFICATIONS"
      ? "VIEW ALL CERTIFICATIONS"
      : "VIEW LESS CERTIFICATIONS";
});

