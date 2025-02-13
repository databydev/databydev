window.onload = function() {
    var divElement = document.getElementById('vizContainer');
    var vizElement = document.createElement("iframe");

    vizElement.setAttribute("src", "https://public.tableau.com/views/ResidentialComplexStoryboard/Story1");
    vizElement.setAttribute("width", "100%");
    vizElement.setAttribute("height", "800px"); // Adjusted to fit properly
    vizElement.setAttribute("frameborder", "0");
    vizElement.setAttribute("scrolling", "no");

    divElement.appendChild(vizElement);
};
