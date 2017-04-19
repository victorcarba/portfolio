
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

$(document).ready (function() {
  $('body').addClass('fondo-comun-' + getRandomInt(1, 11));
});
