// Seat Booking Logic
const seats = document.querySelectorAll('.seat');
const bookSeatBtn = document.getElementById('book-seat');
let selectedSeat = null;

seats.forEach((seat) => {
  seat.addEventListener('click', () => {
    if (selectedSeat) {
      selectedSeat.classList.remove('selected');
    }
    seat.classList.add('selected');
    selectedSeat = seat;
  });
});

bookSeatBtn.addEventListener('click', () => {
  if (selectedSeat) {
    alert(`Seat ${selectedSeat.dataset.seat} booked successfully!`);
  } else {
    alert('Please select a seat first.');
  }
});

// Modal Logic
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const closeModals = document.querySelectorAll('.close-modal');

loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';
});

registerBtn.addEventListener('click', () => {
  registerModal.style.display = 'flex';
});

closeModals.forEach((close) => {
  close.addEventListener('click', () => {
    loginModal.style.display = 'none';
    registerModal.style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  }
  if (e.target === registerModal) {
    registerModal.style.display = 'none';
  }
});

document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Login successful!');
  loginModal.style.display = 'none';
});

document.getElementById('register-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Registration successful!');
  registerModal.style.display = 'none';
});



window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  const heroSection = document.querySelector('.hero');
  const heroHeight = heroSection.offsetHeight; // Get the height of the hero section
  const scrollPosition = window.scrollY;

  // Add the 'scrolled' class if the user has scrolled past the hero section
  if (scrollPosition > heroHeight) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});