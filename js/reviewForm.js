// Fungsi untuk menangani form review baru
document.getElementById('reviewForm').addEventListener('submit', function(e) {
e.preventDefault();

// Ambil data dari form
const name = this.querySelector('input[name="name"]').value.trim();
const email = this.querySelector('input[name="email"]').value.trim();
const comment = this.querySelector('textarea[name="comment"]').value.trim();
const rating = this.querySelector('select[name="rating"]').value;

// Validasi input
if (!name || !email || !comment || !rating) {
alert('Harap isi semua field!');
return;
}

// Tambahkan review baru ke array reviews
const newReview = {
name: name,
rating: parseFloat(rating),
comment: comment,
language: "id" // Default bahasa Indonesia
};
reviews.unshift(newReview); // Tambahkan di awal array

// Tampilkan ulang review terbaru
displayLatestReviews();

// Reset form
this.reset();
});