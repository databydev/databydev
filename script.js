// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Embed Tableau Dashboard
function loadTableau() {
    let container = document.getElementById('vizContainer');
    let url = "https://public.tableau.com/views/ResidentialComplexStoryboard/Story1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"; // Replace with your Tableau link

    let options = {
        width: "100%",
        height: "600px"
    };

    let viz = new tableau.Viz(container, url, options);
}

// Load Tableau on page load
window.onload = loadTableau;
