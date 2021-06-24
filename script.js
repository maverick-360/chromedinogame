const dino = document.getElementById("dino"),
    cactus = document.getElementById("cactus");
var score = document.getElementById("score"),
    scoreInt = parseInt(score.innerHTML);
setInterval(() => {
    if (dino.classList == "dino1") {
        dino.classList.add("dino2");
    }
    else {
        dino.classList.remove("dino2");
    }
}, 200);

function jump() {
    dino.classList.add("jump");
    setTimeout(() => {
        dino.classList.remove("jump");
    }, 400);
}

document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        jump();
    }
}

let isAlive = setInterval(() => {
    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top")),
        cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if (cactusLeft < 46 && cactusLeft > 0 && dinoTop > 180) {
        window.location.reload();
        var r = confirm("Game Over you NOOB!\nLearn some skills and then try again beech...");
    }
}, 10);

setInterval(() => {
    scoreInt++;
    score.innerHTML = scoreInt.toString();
}, 1500)
