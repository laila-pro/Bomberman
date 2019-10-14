// Animating explosions
var tID; //we will use this variable to clear the setInterval()

function stopAnimateBlast() {
  clearInterval(tID);
} //end of stopAnimate()


function animateBlast() {
  let blastWidth = 32; //start position for the image slicer
  let interval = 100; //100 ms of interval for the setInterval()
  let diffBlast = 32; //diff as a variable for position offset

  // if (direction == "left") {
  //   document.getElementById("bomb").style.background = "url('img/zelda_left.png') no-repeat 0px 0px";
  // }

  tID = setInterval(() => {
    let blasts = document.getElementsByClassName("blast");
    for (var i = 0; i < blasts.length; i++) {
      blasts.item(i).style.backgroundPosition =
        `-${blastWidth}px 0px`;
      //we use the ES6 template literal to insert the variable "position"
    }

    if (blastWidth < 384) {
      blastWidth = blastWidth + diffBlast;
    }
    //we increment the position by 32 each time
    else {
      blastWidth = 32;
    }
    //reset the position to 32px, once position exceeds 384px

  }, interval); //end of setInterval
} //end of animateScript()
