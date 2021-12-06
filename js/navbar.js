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

// toggle active class sidenav
$(document).ready(function () {
  $(".toggleSide").on("click", function () {
    $("#sideNav").toggleClass("active");
    $("section").toggleClass("active");
    $("footer").toggleClass("active");
    $(".toggleSide").toggleClass("active");
  });
});

//toggle hamburger menu
$(document).ready(function () {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
    $(this).toggleClass("open");
  });
});
