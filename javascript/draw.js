let firing = missile.y;

function draw() {
  background(0);
  fill(255, 255, 255);
  if (spacePressed) {
    rect(missile.x, firing, missile.l, missile.w);
    firing -= motion;
  
  }
  
    if (firing === 0) {
      firing = missile.y;
    }

  drawShip();
  moveShip();
  fill(0, 255, 0);
//  blueBugs.forEach(bug => ellipse(bug.x, bug.y, 25));
  
  blueBugs.forEach(bug => bug.x2 += 0.3 * direction);
    
  originPoint2 += 0.3 * direction;
  
  if (originPoint2 < (originPoint - 15) || originPoint2 > (originPoint + 15)) {
    direction *= -1;
  }
  
  
  blueBugs.forEach((bug, i) => {
    if (i < 4) {
      fill(0, 255, 0);
    } else if (i < 20) {
      fill(255, 0, 0);
    } else {
      fill(0, 0, 255);
    }
    
    ellipseMode(CENTER);
    ellipse(bug.x2, bug.y, 25);
  });
  
   ellipse(200, 225, shipSize);
  
}