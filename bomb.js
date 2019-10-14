var bomb = document.getElementById("bomb");
var blastCenter = document.getElementById("blastCenter");
var blastTop = document.getElementById("blastTop");
var blastBottom = document.getElementById("blastBottom");
var blastLeft = document.getElementById("blastRight");
var blastRight = document.getElementById("blastLeft");
var limitBomb = false;

var enemy0 = document.getElementById("enemy0");
var enemy1 = document.getElementById("enemy1");
var enemy2 = document.getElementById("enemy2");
var enemy3 = document.getElementById("enemy3");
var enemy0Top = enemy0.offsetTop;
var enemy0Left = enemy0.offsetLeft;
var enemy1Top = enemy1.offsetTop;
var enemy1Left = enemy1.offsetLeft;
var enemy2Top = enemy2.offsetTop;
var enemy2Left = enemy2.offsetLeft;
var enemy3Top = enemy3.offsetTop;
var enemy3Left = enemy3.offsetLeft;

document.addEventListener("keydown", dropBomb);

function dropBomb(event) {
  var keyCode = event.keyCode;
  if (keyCode == 32) {
    if (limitBomb == false) {
      limitBomb = true;
      bomb.style.display = "block";
      bomb.style.top = positionTop + "px";
      bomb.style.left = positionLeft + "px";
      setTimeout(bombBlast, 2000);
      setTimeout(bombExplosion, 2000);
      setTimeout(blastDisparition, 3000);
    }
  }
}

function bombExplosion() {
  bomb.style.display = "none";
  limitBomb = false;
}

function isDead(x, y) { // checking if something is in the bomb blast
  return ( (bomb.offsetTop == y && (bomb.offsetLeft -32) <= x && x <= (bomb.offsetLeft + 32))
  || (bomb.offsetLeft == x && (bomb.offsetTop -32) <= y && y <= (bomb.offsetTop + 32)) );
}

function bombBlast() {
  let enemies = document.getElementsByClassName("enemies");
  if (isDead(player.offsetLeft, player.offsetTop)){
    player.style.display = "none";
    modal.style.display = "block";
  } else {
    for (var i = 0; i < enemies.length; i++) {
      enemy = enemies.item(i);
      if (isDead(enemy.offsetLeft, enemy.offsetTop)) {
        enemy.style.display = "none";
      }
    }
  }

  animateBlast();

  blastCenter.style.display = "block";
  blastCenter.style.top = bomb.offsetTop + "px";
  blastCenter.style.left = bomb.offsetLeft + "px";

  blastTop.style.display = "block";
  blastTop.style.top = bomb.offsetTop - 32 + "px";
  blastTop.style.left = bomb.offsetLeft + "px";

  blastBottom.style.display = "block";
  blastBottom.style.top = bomb.offsetTop + 32 + "px";
  blastBottom.style.left = bomb.offsetLeft + "px";

  blastLeft.style.display = "block";
  blastLeft.style.top = bomb.offsetTop + "px";
  blastLeft.style.left = bomb.offsetLeft - 32 + "px";

  blastRight.style.display = "block";
  blastRight.style.top = bomb.offsetTop + "px";
  blastRight.style.left = bomb.offsetLeft + 32 + "px";
  }

function blastDisparition() {
  blastCenter.style.display = "none";
  blastTop.style.display = "none";
  blastBottom.style.display = "none";
  blastLeft.style.display = "none";
  blastRight.style.display = "none";
}
