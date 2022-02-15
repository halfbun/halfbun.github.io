// hide/show sidenav;
if (window.innerWidth < 900) {
  const navLinks = document.querySelectorAll(".nav-item");
  const menuToggle = document.getElementById("navbarSupportedContent");
  const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
  navLinks.forEach((l) => {
    l.addEventListener("click", () => {
      bsCollapse.toggle();
    });
  });
}

if (window.innerWidth > 800 && $(document).ready()) {
  $("#sideNav").addClass("active");
  $("#circleBase").addClass("active");
  $("section").addClass("active");
  $("footer").addClass("active");
  $("#nav-icon4").addClass("open");
}

// toggle active class sidenav
$(document).ready(function () {
  $("#nav-icon4").on("click", function () {
    $("#sideNav").toggleClass("active");
    $("#circleBase").toggleClass("active");
    $("section").toggleClass("active");
    $("footer").toggleClass("active");
  });
});

//toggle hamburger menu
$(document).ready(function () {
  $("#nav-icon4").click(function () {
    $(this).toggleClass("open");
  });
});
