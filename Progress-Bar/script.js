const inp = document.getElementById("input");
const ctn = document.getElementById("ctn2");
const content = document.getElementById("content");
inp.addEventListener("input", () => {
    let val = inp.value;
    if (val == "") {
        ctn.style.width = 0 + "px";
        content.textContent = "";
        return;
    } else if (isNaN(val)) {
        return;
    } else if (val < 0) {
        val = 0;
    } else if (val > 100) {
        val = 100;
    }
    ctn.style.width = val + "%";
    if (val < 5) ctn.style.flexDirection = "column";
    else ctn.style.flexDirection = "row";
    content.textContent = val + "%";
})