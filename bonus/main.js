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
  imgActive = $(".active");

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

/***************BONUS**************/
//Creo delle variabili per definire i 4 pallini
var firstSelector = $(".nav > .first").css('cursor', 'pointer');;
firstSelector.next().css('cursor', 'pointer');

var fourthSelector = $(".nav > .last").css('cursor', 'pointer');;
fourthSelector.prev().css('cursor', 'pointer');

//Funzione click primo pallino
firstSelector.click(function() {
  imgActive = $(".active");
  imgActive.removeClass('active');
  firstImg.addClass('active');
});

//Funzione click secondo pallino
firstSelector.next().click(function() {
  imgActive = $(".active");
  imgActive.removeClass('active');
  firstImg.next().addClass('active');
});

//Funzione click terzo pallino
fourthSelector.prev().click(function() {
  imgActive = $(".active");
  imgActive.removeClass('active');
  lastImg.prev().addClass('active');
});

//Funzione click quarto pallino
fourthSelector.click(function() {
  imgActive = $(".active");
  imgActive.removeClass('active');
  lastImg.addClass('active');
});

});
