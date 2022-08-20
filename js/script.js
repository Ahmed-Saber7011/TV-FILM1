
 

$(document).ready(function(){ 
  
  /* 1. Visualizing things on Hover - See next part for action on click */
  $('#stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
   
    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });
    
  }).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
  });
  
  
  /* 2. Action to perform on click */
  $('#stars li').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');
    
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
    
    // JUST RESPONSE (Not needed)
    var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    var msg = "";
    if (ratingValue > 1) {
        msg = "Thanks! You rated this " + ratingValue + " stars.";
    }
    else {
        msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
    }
    responseMessage(msg);
    
  });
  
  
});


function responseMessage(msg) {
  $('.success-box').fadeIn(200);  
  $('.success-box div.text-message').html("<span>" + msg + "</span>");
}










///////////////////
//Scroll To Top
///////////////////



 

$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});




 
 


  


/* EJECUTA LA FUNCIÓN AL CARGAR */
onload = ondea; 

var anchoFaja = 2; //ANCHO EN PIXELES DE CADA FAJA EN EL CLIP
var anchoOnda = 25; //VALOR DISTANCIA (DEMORA) EN SENOIDE

function ondea(){
  /* REFIERE AL TÍTULO */ 
  var titulo = document.querySelector("h1"); 
  /* CAPTURA EL CONTENIDO DEL TÍTULO */
  var texto = titulo.innerHTML; 
  /* MIDE EL TAMAÑO DEL TÍTULO */
  var ancho = titulo.offsetWidth; 
  var alto = titulo.offsetHeight; 

  /*SIEMPRE AJUSTA EL ancho COMO MÚLTIPLO DE anchoFaja EN PIXELES*/
  ancho = ancho+(anchoFaja-ancho%anchoFaja); 
  /* FIJA EL TAMAÑO DEL TÍTULO */
  titulo.style.width = ancho+"px"; 
  titulo.style.height = alto+"px"; 

  /* LA CANTIDAD DE BANDAS ES EL ANCHO DE TÍTULO SOBRE ANCHO DE CLIP */
  var totalFajas = ancho/2; 

  /* VACÍA EL TÍTULO CONTENEDOR DE TEXTO */
  titulo.innerHTML = ""; 

  /* CREA LAS BANDAS Y LES DA FORMATO */
  for(i=0; i<totalFajas; i++) {
    /* UN DIV PARA CADA FAJA */
    faja = document.createElement("div"); 
    /* LE ASIGNA LA MISMA ALTURA DEL TÍTULO */
    faja.style.height = alto+"px"; 
    /* PONE EL MISMO TEXTO ORIGINAL */
    faja.innerHTML = texto; 
    /* DEJA VISIBLE UN CLIP DE 2px DE ANCHO, CADA UNO 2px A LA IZQUIERDA DEL ANTERIOR PARA QUE PAREZCA UNA IMAGEN DE TÍTULO COMPLETA SIN CORTES */
    faja.style.clip = "rect(0, "+((i+1)*anchoFaja)+"px, "+alto+"px, "+(i*anchoFaja)+"px)"; 
    /* RETRASA LA ANIMACIÓN CSS DE CADA FAJA SIGUIENDO UNA ONDA DE TIEMPO SENOIDE */
    faja.style.animationDelay = (Math.cos(i)+i*anchoOnda)+"ms"; 
    /* AGREGA LA CAPA AL CONTENEDOR */
    titulo.appendChild(faja);
  }
}

 







 










