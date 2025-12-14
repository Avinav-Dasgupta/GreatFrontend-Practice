const deg = document.getElementById("degree");
const faren = document.getElementById("fahrenheit");

deg.addEventListener("input", () =>{
    let val = deg.value;
    if (!val) {
        faren.value = "";
        return;
    }

    if(isNaN(val)){
        faren.value = "";
        return;
    }
    else{
        faren.value =( (val * 9/5) + 32).toFixed(4);
    }
})

faren.addEventListener("input", () =>{
    let val = faren.value;
    if (!val) {
        deg.value = "";
        return;
    }
    
    if(isNaN(val)){
        deg.value = "";
        return;
    }
    else{
        deg.value =((val - 32) * 5/9).toFixed(4);
    }
})