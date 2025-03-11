// Navigation Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Grading System Logic
function checkGrade() {
    const scoreInput = document.getElementById("score-input");
    const gradeOutput = document.getElementById("grade-output");
    const score = parseInt(scoreInput.value);

    if (isNaN(score)) {
        gradeOutput.textContent = "Please enter a valid number.";
        gradeOutput.style.color = "red";
        return;
    }

    if (score < 0 || score > 100) {
        gradeOutput.textContent = "Score not recognized. Enter a value between 0 and 100.";
        gradeOutput.style.color = "red";
    } else if (score <= 39) {
        gradeOutput.textContent = "F - Fail";
        gradeOutput.style.color = "red";
    } else if (score <= 49) {
        gradeOutput.textContent = "D - Average";
        gradeOutput.style.color = "orange";
    } else if (score <= 59) {
        gradeOutput.textContent = "C - Credit";
        gradeOutput.style.color = "gold";
    } else if (score <= 69) {
        gradeOutput.textContent = "B - Good";
        gradeOutput.style.color = "blue";
    } else {
        gradeOutput.textContent = "A - Excellence";
        gradeOutput.style.color = "green";
    }
}

// Testimonials Carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

setInterval(nextTestimonial, 5000); // Auto-rotate every 5 seconds

// Contact Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
        contactForm.reset();
    } else {
        alert('Please fill out all fields.');
    }
});