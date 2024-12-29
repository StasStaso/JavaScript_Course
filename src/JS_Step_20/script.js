// touchstart
// touchmove
// touchend
// touchenter
// touchleave

window.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box");

  box.addEventListener("touchstart", (e) => {
    e.preventDefault();

    console.log("START");
    
    console.log(e.touches);
    console.log(e.targetTouches);
    console.log(e.changedTouches);
  });

  box.addEventListener("touchmove", (e) => {
    e.preventDefault();

    console.log("MOVE");
  });

  box.addEventListener("touchend", (e) => {
    e.preventDefault();

    console.log("TOUCHEND");
  });
});

// touches
// targetTouches
// changedTouches