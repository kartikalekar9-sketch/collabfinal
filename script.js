 document.addEventListener("DOMContentLoaded", function () {

    // Welcome button functionality
    const button = document.querySelector(".content button");

    button.addEventListener("click", function () {
        alert("Welcome to my website!");
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

});