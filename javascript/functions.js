function chimmy() {
    let x = floor(random(0, theBugs.length));
    
    if (theBugs[x].goingDown === true || theBugs[x].goingUp === true) {
      chimmy();
    } else {
      theBugs[x].goingDown = !theBugs[x].goingDown;
      theBugs[x].x3 = theBugs[x].x2;
      console.log(x)
    }
  }

function chongu(bug) {
  bug.goingDown = false;
  bug.goingUp = true;
}