let motion;

let missile = {
  x: 200,
  y: 320,
  w: 20,
  l: 5,
}

function keyPressed() {
  if (keyCode === 32 && !spacePressed) {
    motion = 10;
    spacePressed = true;
    // Update missile position or any other logic here
  }
}

