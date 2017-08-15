// $(window).on("load", function() {
//
//   var $wrapper = $('.wrapper');
//   var $box = $("#main-menu");
//
//   $(".header__btn").on('click', function() {
//     $box.toggleClass('open');
//     return false;
//   });
//
//   $wrapper.on("click", function(event) {
//     if ($box.has(event.target).length === 0) {
//       $box.removeClass('open');
//     }
//   });
//
//   $("#close-btn").on('click', function() {
//     $box.removeClass('open');
//     return false;
//   });
//
// $("li.sub-menu > a").on('click', function() {
//   $(this).next('ul').slideToggle(400);
//   return false;
// });
//
// });

(function() {
  
  const $wrapper = document.getElementById('wrapper'),
    $box = document.getElementById('main-menu'),
    $btnToggle = document.getElementById('header-btn'),
    $btnClose = document.getElementById('close-btn'),
    $subMenuLink = document.querySelector('li.sub-menu > a');
  let subMenuExpanded = false;

  let toggleMenu = () => {
    $box.classList.toggle('open');
  }

  let closeManu = (e) => {
    if (!$box.contains(e.target) && !$btnToggle.contains(e.target) || $btnClose.contains(e.target)) {
      $box.classList.remove('open');
    }
  }

  let toggleSubMenu = (e) => {
    e.preventDefault();
    const target = e.target,
      $subMenu = target.nextElementSibling;

    if ($subMenu) {
      const menuHeight = $subMenu.scrollHeight + 'px';

      if (!subMenuExpanded) {
        $subMenu.style.height = menuHeight;
        return subMenuExpanded = true;
      } else {
        $subMenu.style.height = 0;
        return subMenuExpanded = false;
      }
    }
  }

  $subMenuLink.addEventListener('click', toggleSubMenu, false);
  $btnToggle.addEventListener('click', toggleMenu, false);
  $wrapper.addEventListener('click', closeManu, false);
})();
