/* Enregistre les coordonnées des murs pour évaluer la faisabilité des déplacements. */

var wallObjects = document.querySelectorAll("div.wall"); // liste tous les objets "wall"
var wallCoordinates = ["wallCoordinates"]; // liste toutes les coordonnées de ces objets
for (var wallObject of wallObjects) {
  wallCoordinates[wallObject.id.replace("wall", "")] = wallObject.style.left + "," + wallObject.style.top;
}

let enemies = document.getElementsByClassName("enemies");
setInterval(enemiesMove, 1000);

function enemiesMove() {
  for (let i = 0; i < enemies.length; i++) {
    enemy = enemies.item(i);
    // Choose random direction
    let direction = Math.floor(Math.random() * 4);
    switch (direction) {
      case 0:
      var positionTest = (enemy.offsetLeft + 32) + "px," + enemy.offsetTop + "px"; // calcul des coordonnées de test
      if (enemy.offsetLeft < 768 && !wallCoordinates.includes(positionTest)) {
        enemy.style.left = enemy.offsetLeft + 32 + "px";
        enemy.style.top = enemy.offsetTop + "px";
      }
      break;
      case 1:
      var positionTest = (enemy.offsetLeft - 32) + "px," + enemy.offsetTop + "px"; // calcul des coordonnées de test
      if (enemy.offsetLeft > 0 && !wallCoordinates.includes(positionTest)) {
        enemy.style.left = enemy.offsetLeft - 32 + "px";
        enemy.style.top = enemy.offsetTop + "px";
      }
      break;
      case 2:
      var positionTest = enemy.offsetLeft + "px," + (enemy.offsetTop + 32) + "px"; // calcul des coordonnées de test
      if (enemy.offsetTop < 768 && !wallCoordinates.includes(positionTest)) {
        enemy.style.left = enemy.offsetLeft + "px";
        enemy.style.top = enemy.offsetTop + 32 + "px";
      }
      break;
      case 3:
      var positionTest = enemy.offsetLeft + "px," + (enemy.offsetTop - 32) + "px"; // calcul des coordonnées de test
      if (enemy.offsetTop > 0 && !wallCoordinates.includes(positionTest)) {
        enemy.style.left = enemy.offsetLeft + "px";
        enemy.style.top = enemy.offsetTop - 32 + "px";
      }
      break;
      default: // do nothing
    }
    if (player.offsetTop == enemy.offsetTop && player.offsetLeft == enemy.offsetLeft) {
      player.style.display = "none";
      modal.style.display = "block";
    }
  }
}
