$(document).ready(function () {
    // When the line is clicked, scroll down to the "About" section
    $('.moving-line').click(function () {
      $('html, body').animate({
        scrollTop: $('#about').offset().top
      }, 800); // Smooth scroll effect, 800ms duration
    });
  });