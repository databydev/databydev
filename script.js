document.addEventListener("DOMContentLoaded", function() {
    var divElement = document.getElementById('viz1739290248904');
    var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = '100%';
    vizElement.style.maxWidth = '900px';
    vizElement.style.height = '600px';

    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
});
