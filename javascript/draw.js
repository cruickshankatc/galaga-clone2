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
      theBugs[index].goingDown = false;
      console.log(theBugs[index].goingDown);
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
    
    if (bug.goingDown === false && bug.goingUp === false) {
      ellipse(bug.x2, bug.y, 25);
    } else if (bug.goingDown === true && bug.goingUp === false) {
      ellipse(bug.x3, bug.y2, 25);
    } else if (bug.goingDown === false && bug.goingUp ===  true) {
      ellipse(bug.x4, bug.y2, 25);
    }
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
  
  for (i = 0; i < theBugs.length; i++) {
    theBugs[i].flyingDown();
  }
  
   for (i = 0; i < theBugs.length; i++) {
    if (theBugs[i].y2 >= 400) {
      chongu(theBugs[i]);
    } else if (theBugs[i].x4 >= theBugs[i].x2 && theBugs[i].y2 <= 5) {
      chase(theBugs[i]);
    }
    
     
   } 
}

function johnson() {
  console.log(theBugs.length);
}

setInterval(johnson, 3000);

let intervalID;

function startOrStopInterval() {
    let anyBugGoingDownOrUp = theBugs.some(bug => !bug.goingDown || !bug.goingUp);
    if (anyBugGoingDownOrUp) {
        if (!intervalID) {
            intervalID = setInterval(chimmy, 1000);
        }
    } else {
        clearInterval(intervalID);
        intervalID = undefined;
    }
}

// Call the function initially
startOrStopInterval();