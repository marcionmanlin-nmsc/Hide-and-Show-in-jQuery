// script.js — Hide and Show in jQuery

$(document).ready(function () {
  const $img = $('#profileImage');
  const $hint = $('.hover-hint .badge');

  // Hide picture when mouse hovers over it
  $img.on('mouseenter', function () {
    $(this)
      .removeClass('animate__zoomIn')
      .addClass('animate__animated animate__fadeOut');

    setTimeout(() => {
      $(this).hide();
      $hint.html('<i class="bi bi-eye-fill me-1"></i>Move mouse away to show it again');
    }, 400);
  });

  // Show picture when mouse leaves the image wrapper area
  $('#imageWrapper').on('mouseleave', function () {
    $img
      .removeClass('animate__fadeOut')
      .css('display', '')
      .show()
      .addClass('animate__animated animate__fadeIn');

    $hint.html('<i class="bi bi-eye-slash-fill me-1"></i>Hover over the image to hide it');
  });
});
