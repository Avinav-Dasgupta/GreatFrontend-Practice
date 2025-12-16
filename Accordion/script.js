const htmlBar = document.getElementById("html");
const htmlDef = document.getElementById("html-def");

htmlBar.addEventListener("click", () =>{
    htmlDef.style.display = htmlDef.style.display == "none" ? "block" : "none";
});


const  cssBar= document.getElementById("css");
const cssDef = document.getElementById("css-def");

cssBar.addEventListener("click", () =>{
    cssDef.style.display = cssDef.style.display == "none" ? "block" : "none";
});

const  jsBar= document.getElementById("js");
const jsDef = document.getElementById("js-def");

jsBar.addEventListener("click", () =>{
    jsDef.style.display = jsDef.style.display == "none" ? "block" : "none";
});
