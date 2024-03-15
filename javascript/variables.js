/**
* Creates an array called theBugs[] and then fills that
* array with 40 empty objects
*/
let theBugs = [];

for (i = 0; i < 40; i++) {
  theBugs.push({});
}


/**
* Simple Boolean that regulates whether the missile is
* fired.
*/
let spacePressed = false;

/**
* Creates the "ship" variable that will then be have the
* attributes within "createShip()" applied to it
*/
let ship;

/**
* Unclear
*/
let originPoint = 5;
let originPoint2 = originPoint;

/**
* Regulates the speed at which the array of bugs moves
* back and forth
*/
let direction = 1;

/**
* Handles the creation of bugs to assure the bugs are
* created in separate rows.
*
* Assigns a color to each bug item in the array.
*/
for (let i = 0; i < theBugs.length; i++) {
  if (i < 4) {
    theBugs[i].x = 125 + i * 25;
    theBugs[i].x2 = theBugs[i].x;
    theBugs[i].y = 50;
  } else if (i < 12) {
    theBugs[i].x = -25 + i * 25;
    theBugs[i].x2 = theBugs[i].x;
    theBugs[i].y = 75;
  } else if (i < 20) {
    theBugs[i].x = -225 + i * 25;
    theBugs[i].x2 = theBugs[i].x;
    theBugs[i].y = 100;
  } else if (i < 30) {
    theBugs[i].x = -450 + i * 25;
    theBugs[i].x2 = theBugs[i].x;
    theBugs[i].y = 125;      
  } else if (i < 40) {
    theBugs[i].x = -700 + i * 25;
    theBugs[i].x2 = theBugs[i].x;
    theBugs[i].y = 150;      
  }
}

for (let i = 0; i < theBugs.length; i++) {
  if (i < 4) {
    theBugs[i].color = "#00FF00"; // Green
  } else if (i < 20) {
    theBugs[i].color = "#FF0000"; // Red
  } else {
    theBugs[i].color = "#0000FF"; // Blue
  }
}
