// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Find the navbar toggle button
    const navbarToggler = document.querySelector(".navbar-toggler");

    // Find the navigation collapse element
    const navbarCollapse = document.querySelector("#navbarSupportedContent");

    // Add an event listener to the toggle button
    navbarToggler.addEventListener("click", function () {
        // Toggle the 'show' class on the navigation collapse element
        navbarCollapse.classList.toggle("show");
    });
});