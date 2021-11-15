let icons = document.getElementsByClassName("timeline-event-icon");

icons[0].addEventListener("mouseenter", function (event) {
  document.getElementsByClassName("timeline")[0].style.setProperty('--before-top', '1.7em');
  document.getElementsByClassName("timeline-event-thumbnail")[0].style.setProperty("background-position", "left");
});

icons[0].addEventListener("mouseleave", function (event) {
  document.getElementsByClassName("timeline")[0].style.setProperty('--before-top', '2em');
  document.getElementsByClassName("timeline-event-thumbnail")[0].style.setProperty("background-position", "right");
});
