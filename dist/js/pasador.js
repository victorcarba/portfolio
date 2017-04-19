$(document).ready(function() {
    $('#slide-1').show();
    $('#puntos-1').addClass('active-cd');

    function muestraSlideSiguiente() {
        var siguienteSlide = $('.slides li:visible').next();
        var slideActual = $('.slides li:visible');
        slideActual.hide();
        // El siguiente elemento sigue siendo un li?
        if (siguienteSlide.is('li')) {
            siguienteSlide.show();
        } else {
            // Muestra el primer elemento de nuevo
            $('.slides li').first().show();
        }

        var siguienteBullet = $('.active-cd').next();
        var bulletActual = $('.active-cd');
        bulletActual.removeClass('active-cd');
        // El siguiente elemento sigue siendo un li?
        if (siguienteBullet.is('li')) {
            siguienteBullet.addClass('active-cd');
        } else {
            // Muestra el primer elemento de nuevo
            $('.puntos li').first().addClass('active-cd');
        }
    };

    function muestraSlideAnterior() {
        var anteriorSlide = $('.slides li:visible').prev();
        var slideActual = $('.slides li:visible');
        slideActual.hide();
        // El siguiente elemento sigue siendo un li?
        if (anteriorSlide.is('li')) {
            anteriorSlide.show();
        } else {
            // Muestra el cuarto elemento de nuevo
            $('.slides li').last().show();
        }

        var anteriorBullet = $('.active-cd').prev();
        var bulletActual = $('.active-cd');
        bulletActual.removeClass('active-cd');
        // El siguiente elemento sigue siendo un li?
        if (anteriorBullet.is('li')) {
            anteriorBullet.addClass('active-cd');
        } else {
            // Muestra el primer elemento de nuevo
            $('.puntos li').last().addClass('active-cd');
        }
    };
    $('.next').click(muestraSlideSiguiente);
    $('.prev').click(function() {
        muestraSlideAnterior(); //es lo mismo que lo de arriba
    });
    $(document).keydown(function(event) {
        if (event.keyCode == 37) {
            muestraSlideAnterior();
        } else if (event.keyCode == 39) {
            muestraSlideSiguiente();
        }
    });
});
