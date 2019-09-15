
// ** Navbar Tab ANIMATION ** //
var navbarTab = $(".classynav ul li a");
for (var i=0; i<navbarTab.length; i++) {
  navbarTab[i].addEventListener("mouseover", function() {
    TweenMax.to(this, 0.1, {fontSize: 16});
  });
  navbarTab[i].addEventListener("mouseout", function() {
    TweenMax.to(this, 0.1, {fontSize: 14});
  });
}
