// ==================== Mobile Menu ====================
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
const navLinks = document.querySelector('.nav-links');
const hamburgers = document.querySelectorAll('.hamburger');

menuToggle.addEventListener('click', () => {
menuToggle.classList.toggle('active');
navLinks.classList.toggle('active');

hamburgers.forEach((hamburger, index) => {
if (menuToggle.classList.contains('active')) {
if (index === 0) {
hamburger.style.transform = 'rotate(45deg) translate(5px, 5px)';
} else if (index === 1) {
hamburger.style.opacity = '0';
} else if (index === 2) {
hamburger.style.transform = 'rotate(-45deg) translate(7px, -6px)';
}
} else {
if (index === 0) {
hamburger.style.transform = 'rotate(0) translate(0, 0)';
} else if (index === 1) {
hamburger.style.opacity = '1';
} else if (index === 2) {
hamburger.style.transform = 'rotate(0) translate(0, 0)';
}
}
});

if (navLinks.classList.contains('active')) {
document.addEventListener('click', closeMenuOnClickOutside);
} else {
document.removeEventListener('click', closeMenuOnClickOutside);
}
});
}

function closeMenuOnClickOutside(e) {
const navLinks = document.querySelector('.nav-links');
const menuToggle = document.querySelector('.menu-toggle');
if (navLinks && menuToggle && !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
menuToggle.classList.remove('active');
navLinks.classList.remove('active');
document.removeEventListener('click', closeMenuOnClickOutside);

const hamburgers = document.querySelectorAll('.hamburger');
hamburgers.forEach((hamburger, index) => {
if (index === 0) {
hamburger.style.transform = 'rotate(0) translate(0, 0)';
} else if (index === 1) {
hamburger.style.opacity = '1';
} else if (index === 2) {
hamburger.style.transform = 'rotate(0) translate(0, 0)';
}
});
}
}

// ==================== Smooth Scroll ====================
document.querySelectorAll('.nav-links a').forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href');
const target = document.querySelector(targetId);
const header = document.querySelector('header');
const headerHeight = header ? header.offsetHeight: 0;
if (target) {
window.scrollTo({
top: target.offsetTop - headerHeight,
behavior: 'smooth'
});
}
if (menuToggle && document.querySelector('.nav-links')) {
menuToggle.classList.remove('active');
document.querySelector('.nav-links').classList.remove('active');
}
});
});

// ==================== Handle Booking ====================
function handleBooking(carName) {
const confirmation = confirm(`Anda akan menyewa ${carName}.\nHubungi kami via WhatsApp untuk konfirmasi?`);
if (confirmation) {
window.location.href = socialMedia.whatsapp;
}
}

// ==================== Handle Contact Form ====================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
contactForm.addEventListener('submit', function(e) {
e.preventDefault();
const name = this.querySelector('input[name="name"]').value.trim();
const email = this.querySelector('input[name="email"]').value.trim();
const message = this.querySelector('textarea[name="message"]').value.trim();

if (!name || !email || !message) {
alert('Harap isi semua field!');
return;
}

if (!validateEmail(email)) {
alert('Email tidak valid!');
return;
}

alert('Pesan telah terkirim! Kami akan segera menghubungi Anda.');
this.reset();
});
}

function validateEmail(email) {
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regex.test(email);
}

// ==================== Language Selector ====================
const languageSelector = document.getElementById('language');
if (languageSelector) {
languageSelector.addEventListener('change', function() {
window.location.hash = `#googtrans(id|${this.value})`;
location.reload();
});
}

// ==================== Hero Slideshow ====================
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
function nextSlide() {
if (slides.length > 0) {
slides[currentSlide].classList.remove('active');
currentSlide = (currentSlide + 1) % slides.length;
slides[currentSlide].classList.add('active');
}
}
if (slides.length > 0) {
setInterval(nextSlide, 5000);
slides[0].classList.add('active');
}

// ==================== Intersection Observer ====================
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.animationPlayState = 'running';
}
});
});
document.querySelectorAll('.animate-text').forEach(el => observer.observe(el));

// ==================== Display Latest Reviews ====================
function displayLatestReviews() {
const reviewsContainer = document.getElementById('reviewsContainer');
if (reviewsContainer && typeof reviews !== 'undefined') {
const latestReviews = reviews.slice(0, 8);
reviewsContainer.innerHTML = latestReviews.map(review => `
<div class="review-item">
<div class="review-rating">
${generateStarRating(review.rating)}
<span>${review.rating}</span>
</div>
<p class="review-comment">"${review.comment}"</p>
<p class="review-author">- ${review.name}</p>
</div>
`).join('');
}
}
document.addEventListener('DOMContentLoaded', displayLatestReviews);

// ==================== Generate Star Rating ====================
function generateStarRating(rating) {
if (isNaN(rating) || rating < 0 || rating > 5) {
return '';
}
const fullStars = Math.floor(rating);
const hasHalfStar = rating % 1 >= 0.5;
let stars = '';
for (let i = 0; i < fullStars; i++) {
stars += '<i class="fas fa-star"></i>';
}
if (hasHalfStar) {
stars += '<i class="fas fa-star-half-alt"></i>';
}
const emptyStars = 5 - Math.ceil(rating);
for (let i = 0; i < emptyStars; i++) {
stars += '<i class="far fa-star"></i>';
}
return stars;
}

// CREDIT
document.addEventListener('DOMContentLoaded', () => {
const creatorName = document.getElementById('creator-name');
const targetUrl = 'https://instagram.com/gior.malik';

creatorName.addEventListener('click', () => {
window.location.href = targetUrl;
});
});