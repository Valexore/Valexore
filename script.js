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

// Show/Hide Password Function
function togglePassword(inputId) {
  const passwordInput = document.getElementById(inputId);
  const showPasswordIcon = passwordInput.nextElementSibling.querySelector("i");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordIcon.classList.remove("fa-eye");
    showPasswordIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    showPasswordIcon.classList.remove("fa-eye-slash");
    showPasswordIcon.classList.add("fa-eye");
  }
}

// Modal Switching Logic
document.addEventListener("DOMContentLoaded", function () {
  const loginModal = document.getElementById("login-modal");
  const forgotPasswordModal = document.getElementById("forgot-password-modal");
  const forgotPasswordLink = document.getElementById("forgot-password-link");
  const switchToLogin = document.getElementById("switch-to-login");
  const closeModals = document.querySelectorAll(".close-modal");

  // Open Forgot Password Modal
  forgotPasswordLink.addEventListener("click", function (e) {
    e.preventDefault();
    loginModal.style.display = "none";
    forgotPasswordModal.style.display = "flex";
  });

  // Switch Back to Login Modal
  switchToLogin.addEventListener("click", function (e) {
    e.preventDefault();
    forgotPasswordModal.style.display = "none";
    loginModal.style.display = "flex";
  });

  // Close Modals
  closeModals.forEach((closeBtn) => {
    closeBtn.addEventListener("click", function () {
      loginModal.style.display = "none";
      forgotPasswordModal.style.display = "none";
    });
  });

  // Close Modal When Clicking Outside
  window.addEventListener("click", function (e) {
    if (e.target === loginModal || e.target === forgotPasswordModal) {
      loginModal.style.display = "none";
      forgotPasswordModal.style.display = "none";
    }
  });
});

function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
  input.setAttribute('type', type);
}


  // Toggle Mobile Menu
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');

  mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close Menu When a Link is Clicked
  const navLinks = document.querySelectorAll('#nav-menu ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });  


  
//croll anim
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