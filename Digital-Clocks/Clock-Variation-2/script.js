const numberDisplay = {
    0: [[1, 1, 1, 0], [1, 0, 1, 1]],
    1: [[0, 0, 1, 0], [0, 0, 1, 0]],
    2: [[0, 1, 1, 1], [1, 1, 0, 1]],
    3: [[0, 1, 1, 1], [0, 1, 1, 1]],
    4: [[1, 0, 1, 1], [0, 1, 1, 0]],
    5: [[1, 1, 0, 1], [0, 1, 1, 1]],
    6: [[1, 1, 0, 1], [1, 1, 1, 1]],
    7: [[0, 1, 1, 0], [0, 0, 1, 0]],
    8: [[1, 1, 1, 1], [1, 1, 1, 1]],
    9: [[1, 1, 1, 1], [0, 1, 1, 1]]
}

function initDigits(elementID) {
    const cont = document.getElementById(elementID);
    cont.innerHTML = `<div class="box-roof"></div><div class="box-base"></div>`

    return {
        top: cont.querySelector(".box-roof"),
        bottom: cont.querySelector(".box-base")
    }
}

const digits = {
    hTens: initDigits("hourTens"),
    hOnes: initDigits("hourOnes"),
    mTens: initDigits("minuteTens"),
    mOnes: initDigits("minuteOnes"),
    sTens: initDigits("secondTens"),
    sOnes: initDigits("secondOnes")
}

function setBorder(obj, digit) {
    const arr = numberDisplay[digit];

    obj.top.style.borderLeftColor = arr[0][0] == 1 ? "#F7C5CC" : "transparent";
    obj.top.style.borderTopColor = arr[0][1] == 1 ? "#F7C5CC" : "transparent";
    obj.top.style.borderRightColor = arr[0][2] == 1 ? "#F7C5CC" : "transparent";
    obj.top.style.borderBottomColor = arr[0][3] == 1 ? "#F7C5CC" : "transparent";

    obj.bottom.style.borderLeftColor = arr[1][0] == 1 ? "#F7C5CC" : "transparent";
    obj.bottom.style.borderTopColor = arr[1][1] == 1 ? "#F7C5CC" : "transparent";
    obj.bottom.style.borderRightColor = arr[1][2] == 1 ? "#F7C5CC" : "transparent";
    obj.bottom.style.borderBottomColor = arr[1][3] == 1 ? "#F7C5CC" : "transparent";
}

function updateClock() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    setBorder(digits.hTens, Math.floor(hour / 10));
    setBorder(digits.hOnes, (hour % 10));
    setBorder(digits.mTens, Math.floor(minute / 10));
    setBorder(digits.mOnes, minute % 10);
    setBorder(digits.sTens, Math.floor(second / 10));
    setBorder(digits.sOnes, second % 10);
}

setInterval(updateClock, 1000);
updateClock();



