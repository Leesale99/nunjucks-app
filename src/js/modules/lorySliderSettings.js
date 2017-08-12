(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.js_slider'),
      sliderImgs = document.querySelectorAll('.js_slider img');

    lory(slider, {
      infinite: 1,
      enableMouseEvents: true
    });

    sliderImgs.forEach((sliderImg) => {
      sliderImg.addEventListener('mousedown', (e) => e.preventDefault(), false);
    });
  });

})();
