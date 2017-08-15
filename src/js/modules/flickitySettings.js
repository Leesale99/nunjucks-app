(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    Array.prototype.slice.call(document.querySelectorAll('.custom-slider')).forEach(function(element, index) {

      var delay = Math.floor(Math.random() * 2000) + 3000;
      var flkty = new Flickity(element, {
        autoPlay: false,
        pageDots: false,
        prevNextButtons: false,
        lazyLoad: true,
        wrapAround: true
      });
    });
  });
})();
