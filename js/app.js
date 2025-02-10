const socialMedia = {
whatsapp: "https://wa.me/6285854965523",
instagram: "https://instagram.com/yourprofile",
email: "mailto:info@example.com"
};

// Data Mobil
const cars = [
{
name: "Toyota Alphard",
price: "2.000.000",
seats: 6,
transmission: "Automatic",
image: "images/alphard.png",
type: "Premium",
orders: Math.floor(Math.random() * (380 - 230 + 1)) + 230,
rating: (Math.random() * (5 - 4.3) + 4.3).toFixed(1),
reviews: Math.floor(Math.random() * (300 - 170 + 1)) + 170
},
{
name: "Toyota Avanza",
price: "650.000",
seats: 6,
transmission: "Automatic",
image: "images/avanza.png",
type: "Standard",
orders: Math.floor(Math.random() * (380 - 230 + 1)) + 230,
rating: (Math.random() * (5 - 4.3) + 4.3).toFixed(1),
reviews: Math.floor(Math.random() * (300 - 170 + 1)) + 170
},
{
name: "Toyota Hiace",
price: "1.300.000",
seats: 14,
transmission: "Manual",
image: "images/hiace.png",
type: "Big Group",
orders: Math.floor(Math.random() * (380 - 230 + 1)) + 230,
rating: (Math.random() * (5 - 4.3) + 4.3).toFixed(1),
reviews: Math.floor(Math.random() * (300 - 170 + 1)) + 170
},
{
name: "Toyota Innova Reborn",
price: "900.000",
seats: 7,
transmission: "Automatic",
image: "images/innovaReborn.png",
type: "Family",
orders: Math.floor(Math.random() * (380 - 230 + 1)) + 230,
rating: (Math.random() * (5 - 4.3) + 4.3).toFixed(1),
reviews: Math.floor(Math.random() * (300 - 170 + 1)) + 170
},
{
name: "Suzuki APV",
price: "700.000",
seats: 7,
transmission: "Manual",
image: "images/apv.png",
type: "Economy",
orders: Math.floor(Math.random() * (380 - 230 + 1)) + 230,
rating: (Math.random() * (5 - 4.3) + 4.3).toFixed(1),
reviews: Math.floor(Math.random() * (300 - 170 + 1)) + 170
},
{
name: "Toyota Fortuner",
price: "1.400.000",
seats: 7,
transmission: "Automatic",
image: "images/fortuner.png",
type: "SUV Premium",
orders: Math.floor(Math.random() * (380 - 230 + 1)) + 230,
rating: (Math.random() * (5 - 4.3) + 4.3).toFixed(1),
reviews: Math.floor(Math.random() * (300 - 170 + 1)) + 170
}
];

// Pastikan variabel cars dapat diakses global (jika diperlukan oleh slider)
window.cars = cars;

// Fungsi untuk generate mobil
function generateCars() {
const carList = document.getElementById('carList');
if (carList) {
carList.innerHTML = cars.map(car => `
<div class="car-item">
<img src="${car.image}" alt="${car.name}" loading="lazy">
<div class="car-badge">${car.type}</div>
<div class="order-badge">
<i class="fas fa-shopping-cart"></i> ${car.orders}+ Orders
</div>
<h3>${car.name}</h3>
<div class="car-rating">
${generateStarRating(parseFloat(car.rating))}
<span>${car.rating} (${car.reviews} Reviews)</span>
</div>
<div class="car-details">
<p><i class="fas fa-tag"></i> Rp${car.price}/10 jam (Include Driver &amp; BBM)</p>
<p><i class="fas fa-users"></i> ${car.seats} Kursi</p>
<p><i class="fas fa-cog"></i> ${car.transmission}</p>
</div>
<button class="rent-button" onclick="handleBooking('${car.name}')">
<i class="fas fa-calendar-check"></i> Booking Sekarang
</button>
</div>
`).join('');
}
}

// Fungsi untuk generate sosial media
function generateSocialLinks() {
const socialLinks = document.getElementById('socialLinks');
if (socialLinks) {
socialLinks.innerHTML = `
<a href="${socialMedia.whatsapp}" target="_blank" class="social-item">
<i class="fab fa-whatsapp"></i> WhatsApp
</a>
<a href="${socialMedia.instagram}" target="_blank" class="social-item">
<i class="fab fa-instagram"></i> Instagram
</a>
<a href="${socialMedia.email}" class="social-item">
<i class="fas fa-envelope"></i> Email
</a>
`;
}
}

// ==================== Slider Animasi Gambar Mobil ====================
function createCarAnimationSlider() {
const sliderContainer = document.getElementById('carAnimationSlider');
if (sliderContainer && typeof cars !== 'undefined' && cars.length > 0) {
sliderContainer.innerHTML = cars.map((car, index) => `
<div class="car-slide ${index === 0 ? 'active': ''}" style="background-image: url('${car.image}');"></div>
`).join('');
let current = 0;
setInterval(() => {
const slides = sliderContainer.querySelectorAll('.car-slide');
slides[current].classList.remove('active');
current = (current + 1) % slides.length;
slides[current].classList.add('active');
}, 4000);
}
}

// Inisialisasi Aplikasi
function initApp() {
generateCars();
generateSocialLinks();
createCarAnimationSlider(); // Panggil fungsi slider (meskipun container tidak ada)
}

document.addEventListener('DOMContentLoaded', initApp);