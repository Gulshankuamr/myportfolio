function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from refreshing the page

  emailjs.sendForm('service_2x2lx43', '{{message}}', this)
    .then(function(response) {
      alert('Message sent successfully!');
    }, function(error) {
      alert('Failed to send message. Please try again later.');
    });
});




