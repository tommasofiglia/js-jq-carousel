//Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
//Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
//Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
//Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider

/*********************** SVOLGIMENTO **********************/

//Uso la forma contratta di Document ready per far sì che il codice js venga letto dal browser dopo il caricamento del DOM.

$(function() {

//Descrivo alcune variabili che mi saranno utili.
var arrowLeft = $(".prev");
var arrowRight = $(".next > i");
var firstImg = $(".first");
var lastImg = $(".last");
var img = $("img");
var imgActive;

// Descrivo cosa succede quando viene cliccata la freccia sinistra. Ho usato un if per inserire il caso in cui l'utente si trova a cliccare "indietro" sulla prima foto, per fare in modo che appaia l'ultima foto.

arrowLeft.click(function() {
  imgActive = $(".active"); //Uso solo la classe .active in quanto è presente anche sui puntini che indicano la selezione e pertanto così facendo posso fare andare di pari passo foto e indicatore della selezione.

    if (firstImg.hasClass('active')) {
      firstImg.removeClass('active');
      lastImg.addClass('active');
    } else {
      imgActive.removeClass('active');
      imgActive.prev().addClass('active');
    };
});

// Descrivo cosa succede quando viene cliccata la freccia destra. Ho usato un if per inserire il caso in cui l'utente si trova a cliccare "avanti" sull'ultima foto, per fare in modo che appaia la prima foto.

arrowRight.click(function() {
  imgActive = $(".active");

  if (lastImg.hasClass('active')) {
      lastImg.removeClass('active');
      firstImg.addClass('active');
    } else {
      imgActive.removeClass('active');
      imgActive.next().addClass('active');
    };
});

// Faccio in modo tale che usando i tasti della keyboard "freccia destra" (che ha keyCode == 39) e "freccia sinistra" (che ha keyCode == 37) il carosello mostri rispettivamente la foto successiva e quella precedente.

$(document).keydown(function(event) {

  if (event.keyCode == 39) {
    arrowRight.click();
  } else if (event.keyCode == 37){
    arrowLeft.click();
  }

});

});
