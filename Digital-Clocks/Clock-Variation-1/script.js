const digits = {
    hTens: document.getElementById("hourTens"),
    hOnes: document.getElementById("hourOnes"),
    mTens: document.getElementById("minuteTens"),
    mOnes: document.getElementById("minuteOnes"),
    sTens: document.getElementById("secondTens"),
    sOnes: document.getElementById("secondOnes"),
}

function updateClock(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    digits.hTens.textContent = Math.floor(hour/10);
    digits.hOnes.textContent = hour%10;
    digits.mTens.textContent = Math.floor(minute/10);
    digits.mOnes.textContent = minute%10;
    digits.sTens.textContent = Math.floor(second/10);
    digits.sOnes.textContent = second%10;
}

setInterval(updateClock, 1000);
updateClock();