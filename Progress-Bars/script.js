const add = document.getElementById("add");
const cont1 = document.getElementById("container");

add.addEventListener("click", () => {
    const cont2 = document.createElement("div");
    cont2.style.width = "1000px";
    cont2.style.height = "20px";
    cont2.style.border = "1px solid black";
    cont2.style.margin = "5px";
    cont2.style.borderRadius = "10px";
    cont1.appendChild(cont2);
    const cont3 = document.createElement("div");
    cont3.style.height = "20px";
    cont3.style.width = "0px";
    cont3.style.backgroundColor = "green";
    cont3.style.borderRadius = "10px";
    cont2.appendChild(cont3);
    const duration = 2000;
    let startTime = null;

    function animateWidth(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        cont3.style.width = (progress * 100) + "%";
        if (progress < 1) {
            requestAnimationFrame(animateWidth);
        }
    }
    requestAnimationFrame(animateWidth);
    })