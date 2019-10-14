let enemies = document.getElementsByClassName("enemies");
setInterval(enemiesMove, 1000);

function enemiesMove() {
  for (let i = 0; i < enemies.length; i++) {
    enemy = enemies.item(i);
    // Choose random direction
    let direction = Math.floor(Math.random() * 4);
    switch (direction) {
      case 0:
        if (enemy.offsetLeft < 768) {
          enemy.style.left = enemy.offsetLeft + 32 + "px";
          enemy.style.top = enemy.offsetTop + "px";
        }
      break;
      case 1:
        if (enemy.offsetLeft > 0) {
          enemy.style.left = enemy.offsetLeft - 32 + "px";
          enemy.style.top = enemy.offsetTop + "px";
        }
      break;
      case 2:
        if (enemy.offsetTop < 768) {
          enemy.style.left = enemy.offsetLeft + "px";
          enemy.style.top = enemy.offsetTop + 32 + "px";
        }
      break;
      case 3:
        if (enemy.offsetTop > 0) {
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
