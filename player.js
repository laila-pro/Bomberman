/* Enregistre les coordonnées des murs pour évaluer la faisabilité des déplacements. */

var wallObjects = document.querySelectorAll("div.wall"); // liste tous les objets "wall"
var wallCoordinates = ["wallCoordinates"]; // liste toutes les coordonnées de ces objets
for (var wallObject of wallObjects) {
  wallCoordinates[wallObject.id.replace("wall", "")] = wallObject.style.left + "," + wallObject.style.top;
}

// Moving player with arrow keys
var player = document.getElementById("player");
var positionLeft = player.offsetLeft;
var positionTop = player.offsetTop;
document.addEventListener("keydown", movePlayer);

function movePlayer(event) {
  var keyCode = event.keyCode;
  if (keyCode == 39) {
    var positionTest = (positionLeft + 32) + "px," + positionTop + "px"; // calcul des coordonnées de test
    if (positionLeft < 768 && !wallCoordinates.includes(positionTest)) {
      positionLeft = positionLeft + 32;
      player.style.left = positionLeft + "px";
      animateScript("right");
      setTimeout(animateScript, 2000);
    }
  }
  else if (keyCode == 37) {
    var positionTest = (positionLeft - 32) + "px," + positionTop + "px"; // calcul des coordonnées de test
    if (positionLeft > 0 && !wallCoordinates.includes(positionTest)) {
      positionLeft = positionLeft - 32;
      player.style.left = positionLeft + "px";
      animateScript("left");
      setTimeout(animateScript, 2000);
    }
  }
  else if (keyCode == 38) {
    var positionTest = positionLeft + "px," + (positionTop - 32) + "px"; // calcul des coordonnées de test
    if (positionTop > 0 && !wallCoordinates.includes(positionTest)) {
      positionTop = positionTop - 32;
      player.style.top = positionTop + "px";
      animateScript("up");
      setTimeout(animateScript, 2000);
    }
  }
  else if (keyCode == 40) {
    var positionTest = positionLeft + "px," + (positionTop + 32) + "px"; // calcul des coordonnées de test
    if (positionTop < 768 && !wallCoordinates.includes(positionTest)) {
      positionTop = positionTop + 32;
      player.style.top = positionTop + "px";
      animateScript("down");
      setTimeout(animateScript, 2000);
    }
  }
}

// Animating player with sprite sheets
var tID; //we will use this variable to clear the setInterval()

function stopAnimate() {
  clearInterval(tID);
} //end of stopAnimate()


function animateScript(direction) {
  let position = 32; //start position for the image slicer
  let interval = 100; //100 ms of interval for the setInterval()
  let diff = 32; //diff as a variable for position offset

  if (direction == "left") {
    document.getElementById("player").style.background = "url('img/zelda_left.png') no-repeat 0px 0px";
  } else if (direction == "right") {
    document.getElementById("player").style.background = "url('img/zelda_right.png') no-repeat 0px 0px";
  } else if (direction == "down") {
    document.getElementById("player").style.background = "url('img/zelda_down.png') no-repeat 0px 0px";
  } else if (direction == "up") {
    document.getElementById("player").style.background = "url('img/zelda_up.png') no-repeat 0px 0px";
  } else {
    document.getElementById("player").style.background = "url('img/zelda.png')";
  }

  tID = setInterval(() => {

    document.getElementById("player").style.backgroundPosition =
    `-${position}px 0px`;
    //we use the ES6 template literal to insert the variable "position"

    if (position < 320) {
      position = position + diff;
    }
    //we increment the position by 32 each time
    else {
      position = 32;
    }
    //reset the position to 32px, once position exceeds 320px

  }, interval); //end of setInterval
} //end of animateScript()
