theBugs[37].name = "testGuy";
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
  if (firing <= 0) {
    spacePressed = false;
  } 
  
  /**
  * Deals with collisions with the missile and items in   
  * theBugs[] to ensure that when the missile's               * coordinates match a bug that bug is spliced.
  * 
  * When a green bug is hit, they are not spliced. Instead,
  * their color simply changes to purple.
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
    ) 
    
    if (bug.color === "#00FF00") {
      bug.color = "#7D00FF"
      spacePressed = false;
    } else {
      theBugs.splice(index, 1);
      spacePressed = false;
      console.log(theBugs.length);
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
    fill(bug.color);
    ellipseMode(CENTER);
    ellipse(bug.x2, bug.y, 25);
  });
  

  /**
  * Text appears on screen to let the player know that 
  * they've won.
  */
  
  if (theBugs.length === 0) {
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255); 
    text("Swag!", width/2, height/2);
  }
  
  if (goingDown) {
    let testGuyBug = theBugs.find(bug => bug.name ===           "testGuy");
    testGuyBug.y++;
  }
  
}