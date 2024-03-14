let firing = 320; 

function draw() {
  /**
  * Gives us the background color
  */
  background(0);
  
  /**
  * Draws a missile based on the missile properties within
  * the missile object from missile.js. The missile is only 
  * drawn when "spacePressed" is turned to "true".
  *
  * "spacePressed" is then turned to "false" again once the 
  * missile's y position (currently set to "firing") 
  * reaches "0"
  */
  fill(255, 255, 255);
  if (spacePressed) {
    rect(firing2, firing, missile.l, missile.w);
    firing -= motion;
  } else if (!spacePressed) {
    firing = missile.y;
  }
  
  /**
  * Simply console logs the length of theBugs[] for         * testing purposes. On collision with objects from         * theBugs[] and object in the array is removed.
  */
  if (firing === 0) {
    console.log(theBugs.length);
  } 
  
  /**
  * Deals with collisions with the missile and items in   
  * theBugs[] to ensure that when the missile's             * coordinates match a bug that bug is spliced.
  *
  * Any time a missile hits a bug the position of missile 
  * resets.
  */
  theBugs.forEach((bug, index) => { 
    if (
    missile && 
    firing2 >= bug.x2 - 12.5 && 
    firing2 <= bug.x2 + 12.5 && 
    firing >= bug.y - 12.5 && 
    firing <= bug.y + 12.5
    ) {
      theBugs.splice(index, 1);
      spacePressed = false;
    }
  });
  
  /**
  * Calls drawShip() and moveShip() from ship.js
  */ 
  drawShip();
  moveShip();
  
  /**
  * Controls the speed at which the bugs move back and       * forth along with the overall distance they cover.
  */
  theBugs.forEach(bug => bug.x2 += 0.3 * direction);
  
  /**
  * Determines the speed at which the distance the ships     * can move back and forth from. The if statement then
  * simply makes sure they go the other way once they 
  * reach their limit.
  */
    
  originPoint2 += 0.1 * direction;
  
  if (originPoint2 < (originPoint - 15) || originPoint2 >     (originPoint + 15)) {
    direction *= -1;
  }
  
  /**
  * Loops through the theBugs[] and assigns a fill value     * for each bug and then draws them.
  * If the bug is within different ranges it gets different
  * colors but is still nonetheless drawn.
  */
  theBugs.forEach((bug, i) => {
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
  
  /**
  * Creates the random lower bug for testing purposes
  */
   ellipse(200, 225, shipSize);
  
}