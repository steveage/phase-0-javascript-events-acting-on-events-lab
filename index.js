// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";

document.addEventListener("keydown", function(event) {
    if(event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});

function moveDodgerLeft() {
    moveDodger(moveLeft);
};

function moveDodgerRight() {
    moveDodger(moveRight);
};

function moveDodger(moveDirection) {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    moveDirection(left);
}

function moveLeft(left) {
    if(left > 0) {
        moveTo(`${left-1}px`)
    }
}

function moveRight(left) {
    if(left < 360) {
        moveTo(`${left + 1}px`)
    }
}

function moveTo(leftValue) {
    dodger.style.left = leftValue;
}