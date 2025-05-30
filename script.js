// Wait for DOM load
document.addEventListener('DOMContentLoaded', () => {
  // 1. Set current year automatically in footer
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Form Validation
  const form = document.getElementById('contactForm');
  const messageBox = document.getElementById('formMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    messageBox.textContent = '';
    let errors = [];

    // Simple validation checks
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name.length < 2) errors.push('Name must be at least 2 characters.');
    if (!validateEmail(email)) errors.push('Please enter a valid email address.');
    if (message.length < 10) errors.push('Message must be at least 10 characters.');

    if (errors.length) {
      messageBox.textContent = errors.join(' ');
      messageBox.style.color = '#b91c69';
    } else {
      messageBox.textContent = 'Thank you for reaching out! We will respond soon.';
      messageBox.style.color = '#4caf50';
      form.reset();
    }
  });

  // Email validation helper
  function validateEmail(email) {
    // Simple regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // 3. jQuery snippet example: Smooth scroll to sections on nav click
  $('nav a').on('click', function(e) {
    const href = $(this).attr('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      $('html, body').animate({scrollTop: $(href).offset().top}, 700);
    }
  });
});


$(document).ready(function () {
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Clear previous errors
    $(".error-message").hide();

    // Name validation (required, min 2 chars)
    const name = $("#name").val().trim();
    if (name.length < 2) {
      $("#name").next(".error-message").text("Please enter your full name.").show();
      isValid = false;
    }

    // Email validation (simple regex)
    const email = $("#email").val().trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      $("#email").next(".error-message").text("Please enter a valid email address.").show();
      isValid = false;
    }

    // Message validation (required, min 10 chars)
    const message = $("#message").val().trim();
    if (message.length < 10) {
      $("#message").next(".error-message").text("Message must be at least 10 characters.").show();
      isValid = false;
    }

    if (isValid) {
      // Here you would typically send the form via AJAX or similar
      alert("Thank you for contacting us, " + name + "! We'll get back to you soon.");
      this.reset();
    }
  });
});
