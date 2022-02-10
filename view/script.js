'use strict';



////////////////////////////////////////////////////////////////////////
/////////////////// slider

const dot1 = document.getElementById('dot-1');
const dot2 = document.getElementById('dot-2');
const dot3 = document.getElementById('dot-3');

const testCard1 = document.getElementById('test-card-1');
const testCard2 = document.getElementById('test-card-2');
const testCard3 = document.getElementById('test-card-3');


dot1.addEventListener('click', function(e) {
	e.preventDefault();
	dot1.classList.add('testimonials__dot--active');
	dot2.classList.remove('testimonials__dot--active');
	dot3.classList.remove('testimonials__dot--active');
	testCard2.classList.add('u-hidden');
	testCard3.classList.add('u-hidden');
	testCard1.classList.remove('u-hidden');
})



dot2.addEventListener('click', function(e) {
	e.preventDefault();
	dot2.classList.add('testimonials__dot--active');
	dot1.classList.remove('testimonials__dot--active');
	dot3.classList.remove('testimonials__dot--active');
	testCard1.classList.add('u-hidden');
	testCard3.classList.add('u-hidden');
	testCard2.classList.remove('u-hidden');
})

dot3.addEventListener('click', function(e) {
	e.preventDefault();
	dot3.classList.add('testimonials__dot--active');
	dot2.classList.remove('testimonials__dot--active');
	dot1.classList.remove('testimonials__dot--active');
	testCard1.classList.add('u-hidden');
	testCard2.classList.add('u-hidden');
	testCard2.classList.remove('u-hidden');
})

const myTimeout = setTimeout(preload, 4000);

function preload() {
  document.getElementById('preloader').style.display = 'none';
  document.getElementById('html').style.overflowY = 'visible';
}

const smallTimeout = setTimeout(preload2, 100);

function preload2() {
	document.getElementById('preloader').classList.add('preloader-animate');
	document.getElementById('html').style.overflowY = 'hidden';
}


/////////////////////////////////////////////
///////// Resume

const resume = document.getElementById('resume-btn');

// const resumeTimeout = setTimeout(linkOpen, 1000);

resume.addEventListener('click', (e) => {e.preventDefault(); setTimeout(linkOpen, 2000)});

function linkOpen() {
	console.log('Link');
	resume.setAttribute("href", "./drawables/My resume (piyush) (6).pdf");
	window.location.href = "https://drive.google.com/file/d/1SMdWHMGXWmHWJnmfbWyPOO_ImbLa6bmP/view?usp=sharing";
}