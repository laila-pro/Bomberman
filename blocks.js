// Generate walls blocks as trees (????)
let wallPositions = [];

for (var j = 0; j < 12; j++) {
  for (var i = 0; i < 12; i++) {
    wallPositions.push([2*j+1,2*i+1]);
  }
}

for (var i = 0; i < wallPositions.length; i++) {
  let wall = document.createElement("div");
  walls.appendChild(wall);
  wall.classList.add("wall");
  wall.setAttribute('id', 'wall'+i);
  wall.style.left = wallPositions[i][0] * 32 + 'px';
  wall.style.top = wallPositions[i][1] * 32 + 'px';
};
