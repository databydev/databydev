window.onload = function() {
    var divElement = document.getElementById('vizContainer');
    var vizElement = document.createElement("object");

    vizElement.setAttribute("class", "tableauViz");
    vizElement.setAttribute("style", "width:100vw; height:100vh; border:none;");
    vizElement.setAttribute("data-tabs", "no");

    vizElement.innerHTML = `
        <param name="host_url" value="https://public.tableau.com/">
        <param name="embed_code_version" value="3">
        <param name="site_root" value="">
        <param name="name" value="ResidentialComplexStoryboard/Story1">
        <param name="tabs" value="no">
        <param name="toolbar" value="yes">
        <param name="animate_transition" value="yes">
        <param name="display_spinner" value="yes">
        <param name="display_overlay" value="yes">
        <param name="display_count" value="yes">
    `;

    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';

    divElement.appendChild(vizElement);
    divElement.appendChild(scriptElement);
};
