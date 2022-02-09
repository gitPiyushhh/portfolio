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