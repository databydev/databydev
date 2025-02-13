// Ensure Tableau JS API is loaded before running
document.addEventListener("DOMContentLoaded", () => {
    loadTableau();
    applyDarkModePreference();
    setupDarkModeToggle();
});

// Embed Tableau Dashboard
function loadTableau() {
    let container = document.getElementById('vizContainer');
    if (!container) return;

    let url = "https://public.tableau.com/views/ResidentialComplexStoryboard/Story1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"; // Replace with your Tableau link

    let options = {
        width: "100%",
        height: "600px"
    };

    new tableau.Viz(container, url, options);
}

// Dark Mode Toggle
function setupDarkModeToggle() {
    const toggleButton = document.getElementById("dark-mode-toggle");

    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
        });
    }
}

// Preserve Dark Mode Preference
function applyDarkModePreference() {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
}
