const btn  =document.getElementById("counter");
let counter = 0;
btn.addEventListener("click", () => {
    counter++;
    btn.textContent = "Counter: "+ counter;
})