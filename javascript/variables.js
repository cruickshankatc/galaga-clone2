/**
* Creates an array called theBugs[] and then fills that
* array with 40 empty objects
*/
let theBugs = [];

let greenBugs;
let redBugs;
let blueBugs;

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
* Regulates the size of the random lower ship. For testing 
* purposes only.
*/
let shipSize = 25;

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