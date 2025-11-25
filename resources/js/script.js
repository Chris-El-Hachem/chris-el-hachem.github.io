const pageContents = {
"home": `
<h1>Hi, I'm Chris!</h1>
<p>Thanks for checking out my portfolio!</p>
<p>I am a third-year Mechanical and Mechatronic Engineering student.</p>
`,

"all-projects": `
<h1>All Projects</h1>
<p>osteotomy</p>
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
<p>Feel free to reach out to me about anything on the following platforms:</p>
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
`,
}

const cont = document.getElementById("main-content");

async function goToPage(pageName) {
    cont.innerHTML = pageContents[pageName];
}

goToPage("home");