function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("about-btn").addEventListener("click", function() {
    document.getElementById("about-section").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("projects-btn").addEventListener("click", function() {
    window.location.href = "projects.html"; // Navigates to projects page
});
