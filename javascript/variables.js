let blueBugs = [];


let spacePressed = false;

for (i = 0; i < 40; i++) {
  blueBugs.push({});
}

let ship;
let shipSize = 25;
let originPoint = 225;
let originPoint2 = originPoint;
let direction = 1;

//GIVING BUGS POSITIONS
  for (let i = 0; i < blueBugs.length; i++) {
    if (i < 4) {
      blueBugs[i].x = 125 + i * 25;
      blueBugs[i].x2 = blueBugs[i].x;
      blueBugs[i].y = 50;
    } else if (i < 12) {
      blueBugs[i].x = -25 + i * 25;
      blueBugs[i].x2 = blueBugs[i].x;
      blueBugs[i].y = 75;
    } else if (i < 20) {
      blueBugs[i].x = -225 + i * 25;
      blueBugs[i].x2 = blueBugs[i].x;
      blueBugs[i].y = 100;
    } else if (i < 30) {
      blueBugs[i].x = -450 + i * 25;
      blueBugs[i].x2 = blueBugs[i].x;
      blueBugs[i].y = 125;      
    } else if (i < 40) {
      blueBugs[i].x = -700 + i * 25;
      blueBugs[i].x2 = blueBugs[i].x;
      blueBugs[i].y = 150;      
    }
  }