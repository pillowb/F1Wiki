var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("top-header").style.top = "0";
  } else {
    document.getElementById("top-header").style.top = "-8vh";
  }
  prevScrollpos = currentScrollPos;
}
