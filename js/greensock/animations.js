

window.addEventListener("load", function() {
  startSlider();
});




/*-------------ANIMACION NAVBAR-----------*/
/*----------------------------------------*/

var navbarTab = $(".classynav ul li a");
for (var i=0; i<navbarTab.length; i++) {
  navbarTab[i].addEventListener("mouseover", function() {
    TweenMax.to(this, 0.1, {fontSize: 16});
  });
  navbarTab[i].addEventListener("mouseout", function() {
    TweenMax.to(this, 0.1, {fontSize: 14});
  });
}




/*------------ANIMACION PARALLAX----------*/
/*----------------------------------------*/

$(document).scroll(function () {
  var scrolled = $(window).scrollTop()
  var parallaxScrolled = scrolled/10;
  $(".parallax").each(function(index, element) {
    var verticalPosition = 50 + parallaxScrolled;
    // alert(verticalPosition);
    // Check if the element is in the viewport.
    var visible = isInViewport(this)
    if(visible) {
      $(this).css('background-position','50% ' + parseInt(verticalPosition) + '%')
    }
  })
})

function isInViewport(node) {
  var rect = node.getBoundingClientRect()
  return (
    (rect.height > 0 || rect.width > 0) &&
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  )
}




/*-------------ANIMACION SLIDER-----------*/
/*----------------------------------------*/

function startSlider() {

	var automatico1 = new TimelineMax({repeat:-1});
	var automatico2 = new TimelineMax({repeat:-1, delay:9.5});
	var automatico3 = new TimelineMax({repeat:-1, delay:19});

  var automaticos = [automatico1, automatico2, automatico3];
  var slides = $("#custom_slider_container .custom_slide");


	/************** SLIDER AUTOMÁTICO **************/
  for (var i=0; i<slides.length; i++) {

    var slide = $("#custom_slider_container .custom_slide").eq(i);
    var slideTitle = $("#custom_slider_container .custom_slide").eq(i).find("p");
    var slideSubtitle = $("#custom_slider_container .custom_slide").eq(i).find("div");
    var bubbleOver = $(".bubbles_container .bubble_over").eq(i);

    automaticos[i].to(slide, 0.5, {autoAlpha:1}, "feature")
    automaticos[i].to(slideTitle, 9.5, {x:'18%', ease:Power0.easeNone}, "feature")
		automaticos[i].to(slideSubtitle, 9.5, {x:'-10%', ease:Power0.easeNone}, "feature")
    automaticos[i].to(bubbleOver, 0.5, {autoAlpha:1, visibility:"visible"}, "feature")

    automaticos[i].to(slide, 0.5, {autoAlpha:0}, "feature+=9.5")
    automaticos[i].to(bubbleOver, 0.5, {autoAlpha:0, visibility:"hidden"}, "feature+=9.5")

		automaticos[i].to(slide, 18.5, {autoAlpha:0})

  }

  /************** CLICK BURBUJAS INFERIORES **************/
  var sliderBubblesUnder = $(".bubbles_container .bubble_under");
  var sliderBubblesOver = $(".bubbles_container .bubble_over");

  sliderBubblesUnder.click(function() {
    var index = $( ".bubbles_container .bubble_under" ).index( this ); //Devuelve el index de la burbuja seleccionada
    for (i = 0; i< sliderBubblesUnder.length; i++) {
      if (index == i) {
        var automatico = automaticos[i];
        automatico.restart();
        TweenMax.to(slides[i], 0.5, {autoAlpha:1});
        setTimeout(function(){
    			automatico.pause();
    		}, 9500);
      }
      else {
        automaticos[i].pause();
        TweenMax.to(slides[i], 0.5, {autoAlpha:0});
        TweenMax.to(sliderBubblesOver[i], 0.5, {autoAlpha:0});
      }
    }
  });

}
