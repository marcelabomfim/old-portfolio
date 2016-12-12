$(document).ready(function() {

  var mySlideIndex = 1;
  var isSliding = false;

  $('#fullpage').fullpage({
    menu: '#menu',
    anchors:['Home', 'About', 'Portfolio', 'Contact'],
    controlArrows: false,
    //events
    onLeave: function (index, nextIndex, direction) {
      if (index == 2 && !isSliding) {
        if (direction == 'down' && mySlideIndex < 3) {
          isSliding = true;
          $.fn.fullpage.moveSlideRight();
          return false;
        } else if (direction == 'up' && mySlideIndex > 1) {
          isSliding = true;
          $.fn.fullpage.moveSlideLeft();
          return false;
        }
      } else if (isSliding) {
        return false;
      }
    },
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
      isSliding = false;
    },
    onSlideLeave  : function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
      if (index == 2) {
        if (direction == 'right') {
          isSliding = true;
          mySlideIndex++;
        }

        if (direction == 'left') {
          isSliding = true;
          mySlideIndex--;
        }
      }
    }
  });

});
