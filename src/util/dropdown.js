document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");


    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    } else {
        console.error("menuToggle nebo navLinks nebyly nalezeny!");
    }
});