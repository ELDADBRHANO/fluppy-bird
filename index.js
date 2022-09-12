let distanceLeft = 0;
let distanceTop = 0;
let intervalId;
function playGame() {
    document.getElementById("play_game").style.display = "none";
    intervalId = setInterval(() => {
        player.style.left = distanceLeft++ + 'px';
        player.style.top = distanceTop++ + 'px';
        if (distanceTop >= 500) {
            player.src = "./images/explosion,gif";
            clearInterval(intervalId);
            alert("Game Over");
        }
    }, 50);
}
function getPlayerKey(e) {
    if (e.key == "ArrowUp") {
        player.style.top = distanceTop-- + 5+'px';
    }
    else if (e.key == " ") {
        clearInterval(intervalId);
        document.getElementById("play_game").style.display = "block";
    }
}
setTimeout(() => {
    clearInterval(intervalId);
    distanceLeft = 0;
    distanceTop = 0;
    play_game.style.display = "block";
    alert("time Over");
}, 60000);