// preloading screen
$(document).ready(function () {
  setTimeout(function () {
    $("body").addClass("loaded");
    // $("#sideNav").addClass("active");
    // $("#circleBase").addClass("active");
    // $("section").addClass("active");
    // $("footer").addClass("active");
    // $("#nav-icon4").addClass("open");
  }, 1500);
});

// smooth scroll chrome
SmoothScroll({
  frameRate: 150,
  animationTime: 1000,
  stepSize: 100,
  pulseAlgorithm: 1,
  pulseScale: 4,
  pulseNormalize: 1,
  accelerationDelta: 50,
  accelerationMax: 3,
  keyboardSupport: 1,
  arrowScroll: 50,
  fixedBackground: 0,
});

$(".animate-btn").click(function () {
  var animation = $(this).attr("data-animation");
  $(this)
    .addClass(animation)
    .delay(1000)
    .queue(function (next) {
      $(this).removeClass(animation);
      next();
    });
});

$(function smoothnav() {
  $(".navbar-custom a, .talk a, .arrows a").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        2000,
        "easeInOutCubic"
      );
    event.preventDefault();
  });
});

$(".site-ref").click(function (event) {
  // do interesting things
  return false;
});

// jumping text
const heading = document.querySelector(".jump");
heading.innerHTML = sparanWrap(heading.textContent);

function sparanWrap(word) {
  return [...word].map((letter) => `<span>${letter}</span>`).join("");
}
