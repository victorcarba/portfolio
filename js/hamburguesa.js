function openNav() {
    document.getElementById("myNav").style.width = "100%";
  /*  document.getElementById("menu_eliminar").style.visibility = "hidden";*/
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";

}



//oscuridad en la cabecera

$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.

	if ($(window).scrollTop() > 25 ){

 		$('.bg').addClass('show');

  } else {

    $('.bg').removeClass('show');

 	};
});
