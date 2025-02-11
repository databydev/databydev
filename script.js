window.onload = function() {
    var divElement = document.getElementById('vizContainer');
    var vizElement = document.createElement("object");

    vizElement.setAttribute("class", "tableauViz");
    vizElement.setAttribute("style", "width:100%; height:85vh;");
    vizElement.setAttribute("data-tabs", "no");

    // Set up Tableau parameters
    vizElement.innerHTML = `
        <param name="host_url" value="https://public.tableau.com/">
        <param name="embed_code_version" value="3">
        <param name="site_root" value="">
        <param name="name" value="ResidentialComplexStoryboard/Story1">
        <param name="tabs" value="no">
        <param name="toolbar" value="yes">
        <param name="static_image" value="https://public.tableau.com/static/images/Re/ResidentialComplexStoryboard/Story1/1.png">
        <param name="animate_transition" value="yes">
        <param name="display_static_image" value="yes">
        <param name="display_spinner" value="yes">
        <param name="display_overlay" value="yes">
        <param name="display_count" value="yes">
        <param name="language" value="en-US">
        <param name="filter" value="publish=yes">
    `;

    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';

    divElement.appendChild(vizElement);
    divElement.appendChild(scriptElement);
};
