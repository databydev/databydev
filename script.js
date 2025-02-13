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

// Dark Mode Toggle
const toggleButton = document.getElementById("dark-mode-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
});

// Preserve Dark Mode Preference
window.addEventListener("load", () => {
    if (localStorage.getItem("darkMode") === "true") {
        body.classList.add("dark-mode");
    }
});


<div class='tableauPlaceholder' id='viz1739427491467' style='position: relative'>
<noscript>
<a href='#'>
<img alt='Trends in Residential Complex Prices in Malaysia ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Re&#47;ResidentialComplexStoryboard&#47;Story1&#47;1_rss.png' style='border: none' />
</a>
</noscript>
<object class='tableauViz'  style='display:none;'>
<param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
<param name='embed_code_version' value='3' /> <param name='site_root' value='' />
<param name='name' value='ResidentialComplexStoryboard&#47;Story1' />
<param name='tabs' value='no' />
<param name='toolbar' value='yes' />
<param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Re&#47;ResidentialComplexStoryboard&#47;Story1&#47;1.png' /> 
<param name='animate_transition' value='yes' />
<param name='display_static_image' value='yes' />
<param name='display_spinner' value='yes' />
<param name='display_overlay' value='yes' />
<param name='display_count' value='yes' />
<param name='language' value='en-US' />
</object>
</div>
<script type='text/javascript'>
var divElement = document.getElementById('viz1739427491467');                    
var vizElement = divElement.getElementsByTagName('object')[0];                    
vizElement.style.width='1016px';vizElement.style.height='991px';                    
var scriptElement = document.createElement('script');                    
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
vizElement.parentNode.insertBefore(scriptElement, vizElement);                
</script>
