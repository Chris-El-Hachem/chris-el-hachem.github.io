const messages = {
"home": `
<h1>Hi, I'm Chris!</h1>
<p>I am a third-year Mechanical and Mechatronic Engineering student.</p>
`,

"contact": `
<h1>Contact me</h1>
<p>linkedin:</p>
`,
}

const cont = document.getElementById("main-content");

async function goToPage(pageName) {
    cont.innerHTML = messages[pageName];
}

goToPage("home");