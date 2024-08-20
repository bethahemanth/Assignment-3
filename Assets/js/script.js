// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Example of basic form validation (Optional)
document.querySelector('form').addEventListener('submit', function (event) {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    if (!name || !email || !message) {
        event.preventDefault();
        alert('Please fill out all fields.');
    }
});
