// Function to smoothly scroll to a section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Event listeners for About Me and Contact Me
document.getElementById("about-box").addEventListener("click", function() {
    scrollToSection("about");
});

document.getElementById("contact-box").addEventListener("click", function() {
    scrollToSection("contact");
});

// Event listener for Projects - Redirect to projects.html
document.getElementById("projects-box").addEventListener("click", function() {
    window.location.href = "projects.html"; // Navigates to Projects page
});
