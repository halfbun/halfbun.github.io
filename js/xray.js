$(document).ready(function () {
  var currentMousePos = { x: -1, y: -1 };
  $("#real").mousemove(function (e) {
    currentMousePos.x = e.pageX;
    currentMousePos.y = e.pageY;

    $("#cartoon").css("-webkit-mask-position-x", currentMousePos.x - 210);
    $("#cartoon").css("-webkit-mask-position-y", currentMousePos.y - 170);
  });
});

let idleTimer = null;
let idleState = false;

function showFoo(time) {
  clearTimeout(idleTimer);
  if (idleState == true) {
    $("#cartoon").removeClass("inactive");
  }
  idleState = false;
  idleTimer = setTimeout(function () {
    $("#cartoon").addClass("inactive");
    idleState = true;
  }, time);
}

showFoo(500);

$(window).mousemove(function () {
  showFoo(500);
});
