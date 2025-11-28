const pageContents = {
"home": `
<h1>Hi, I'm Chris!</h1>
<p>Thanks for checking out my portfolio!</p>
<p>I am a third-year Mechanical and Mechatronic Engineering student.</p>
`,

"osteotomy-psi": `
<h1>osteotomy</h1>
<p>cut bone</p>
`,

"all-projects": `
<h1>All Projects</h1>
<div class="container-fluid p-0">
    <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <a onclick="goToPage('osteotomy-psi')" href="#" class="thumbnail" style="text-decoration: none;">
                <img src="pages/contact/network_banner.jpg" class="img-fluid" style="aspect-ratio: 1.4; object-fit: cover" alt="...">
                <p style="text-align: center;">project name</p>
            </a>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <a href="#" class="thumbnail" style="text-decoration: none;">
                <img src="pages/contact/network_banner.jpg" class="img-fluid" style="aspect-ratio: 1.4; object-fit: cover" alt="...">
                <p style="text-align: center;">project name</p>
            </a>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <a href="#" class="thumbnail" style="text-decoration: none;">
                <img src="pages/contact/network_banner.jpg" class="img-fluid" style="aspect-ratio: 1.4; object-fit: cover" alt="...">
                <p style="text-align: center;">project name</p>
            </a>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <a href="#" class="thumbnail" style="text-decoration: none;">
                <img src="pages/contact/network_banner.jpg" class="img-fluid" style="aspect-ratio: 1.4; object-fit: cover" alt="...">
                <p style="text-align: center;">project name</p>
            </a>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <a href="#" class="thumbnail" style="text-decoration: none;">
                <img src="pages/contact/network_banner.jpg" class="img-fluid" style="aspect-ratio: 1.4; object-fit: cover" alt="...">
                <p style="text-align: center;;">project name</p>
            </a>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <a href="#" class="thumbnail" style="text-decoration: none;">
                <img src="pages/contact/network_banner.jpg" class="img-fluid" style="aspect-ratio: 1.4; object-fit: cover" alt="...">
                <p style="text-align: center;">project name</p>
            </a>
        </div>
    </div>
</div>
`,

"skills": `
<h1>Skills</h1>
<p>website</p>
`,

"about": `
<h1>About Me</h1>
<p>education</p>
`,

"contact": `
<h1>Contact Me</h1>
<p>If you want to reach out to me about anything, or want to see what I'm up to, feel free to do so on the following platforms:</p>
<p>Email: elhachemchris73@gmail.com</p>
<p>Linkedin:
    <a
        href="https://www.linkedin.com/in/chris-el-hachem/"
        target="_blank"
        rel="noopener noreferrer"
    >
        linkedin.com/in/chris-el-hachem
    <\a>
</p>
<p>GitHub:
    <a
        href="https://github.com/Chris-El-Hachem"
        target="_blank"
        rel="noopener noreferrer"
    >
        github.com/Chris-El-Hachem
    <\a>
</p>
`,
}

const banners = {
"home": `
<img>
`,

"osteotomy-psi": `
<img>
`,

"all-projects": `
<img>
`,

"skills": `
<img>
`,

"about": `
<img>
`,

"contact": `
<img src="pages/contact/network_banner.jpg" class="img-fluid" alt="...">
`,
}

const cont = document.getElementById("main-content");
const banner_div = document.getElementById("banner")

async function goToPage(pageName) {
    if (!pageContents.hasOwnProperty(pageName)) return; 
    // The whitelist condition above ensures that this function will 
    // only change the inner HTML if the new HTML comes from the 
    // object, preventing JS injections and other bad stuff.
    cont.innerHTML = pageContents[pageName];
    banner_div.innerHTML = banners[pageName];
}

goToPage("home");