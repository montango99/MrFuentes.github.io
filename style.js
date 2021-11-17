let moused = null;

let icons = document.getElementsByClassName("timeline-event-icon");
let thumbnail = document.getElementsByClassName("timeline-event-thumbnail");
let before = document.getElementsByClassName("timeline-event");

function mouseover(section) {
  moused = section;
  for (let i = 0; i < 3; i++) {
    if (section != i) {
      close(i);
    }
  }
  before[section].style.setProperty("--before-top", '1.7em');
  before[section].children[1].children[3].style.setProperty("transition","opacity .5s linear, max-height 1s ease-out");
  before[section].children[1].children[3].style.setProperty("max-height","500px");
  before[section].children[1].children[3].style.setProperty("opacity","1");
  thumbnail[section].style.setProperty("background-position", "left");
  icons[section].style.setProperty("transform", "rotate(0deg)");
  icons[section].style.setProperty("background-color", "#1BB7BF");
}

function close(section) {
  before[section].style.setProperty('--before-top', '2em');
  before[section].children[1].children[3].style.setProperty("transition","opacity .01s linear, max-height .5s ease-out");
  before[section].children[1].children[3].style.setProperty("max-height","0px");
  before[section].children[1].children[3].style.setProperty("opacity","0");
  thumbnail[section].style.setProperty("background-position", "right");
  icons[section].style.setProperty("transform", "rotate(45deg)");
  icons[section].style.setProperty("background-color", "#23212D");
}

document.getElementById("event0").addEventListener("mouseenter", function(event) {
  mouseover(0);
})
document.getElementById("event1").addEventListener("mouseenter", function(event) {
  mouseover(1);
})
document.getElementById("event2").addEventListener("mouseenter", function(event) {
  mouseover(2);
})
document.getElementById("icon0").addEventListener("mouseenter", function(event) {
  mouseover(0);
})
document.getElementById("icon1").addEventListener("mouseenter", function(event) {
  mouseover(1);
})
document.getElementById("icon2").addEventListener("mouseenter", function(event) {
  mouseover(2);
})
