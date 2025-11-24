const cont = document.getElementById("main-content");
cont.innerHTML = "<p>pleeeeeease<\p>"
fetch('/home.html')
.then(res=>res.text())
.then(data=>{
    cont.innerHTML = data
})