
setInterval(function(){


  $(document).ready(function() {
    $('body').addClass('fondo-color-' + getRandomInt(1, 11));
  });


  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


}, 1000);
