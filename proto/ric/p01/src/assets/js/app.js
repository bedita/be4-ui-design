$(document).foundation();

$('.js-pubb-link').click(function(){
    $('.js-nav-bar').removeClass('nav-bar--expanded');
    if ($('.js-pubb-panel').hasClass('is-visible')) {
        $('.js-pubb-panel').removeClass('is-visible');
        $('.js-body-overlay').removeClass('is-visible');
        if ($('.js-pubb-details').hasClass('is-visible')) {
            $('.js-pubb-details').removeClass('is-visible');
        }
    } else {
        $('.js-pubb-panel').addClass('is-visible');
        $('.js-body-overlay').addClass('is-visible');
    }
});

$('.js-body-overlay').click(function(){
    if ($('.js-pubb-panel').hasClass('is-visible')) {
        $('.js-pubb-panel').removeClass('is-visible');
        if ($('.js-pubb-details').hasClass('is-visible')) {
            $('.js-pubb-details').removeClass('is-visible');
        }
        $('.js-body-overlay').removeClass('is-visible');
    }
});

$('.pubb-panel__link').click(function(){
    $('.js-pubb-details').addClass('is-visible');
    $('.js-pubb-details').html($(this).html() + "<br> <small>Impostazioni di sezione (nome, proprietà, contenuti...)</small>");
});

$('.js-nav-bar').mouseenter(function(){
    $(this).addClass('nav-bar--expanded');
});

$('.js-nav-bar').mouseleave(function(){
    $(this).removeClass('nav-bar--expanded');
});

//$('#checkbox12').change(function(){
//  $('.contents__item').toggle(this.checked);
//});

$('#checkbox22').change(function(){
  $('.contents__item.content--doc').toggle(this.checked);
});

$('#checkbox32').change(function(){
  $('.contents__item.content--news').toggle(this.checked);
});

$('#checkbox42').change(function(){
  $('.contents__item.content--event').toggle(this.checked);
});

$('#checkbox52').change(function(){
  $('.contents__item.content--media').toggle(this.checked);
});

var contentsSelected = 0;
$('.contents__item').click(function(){
    if( $('.drawer').hasClass('drawer--show') ){
        $('.drawer').removeClass('drawer--show');
    }
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
        contentsSelected--;
        if(contentsSelected === 0) {
          $('.contents-tools').hide();
        }
    } else {
        $(this).addClass('selected');
        contentsSelected++;
        $('.contents-tools').show();
    }
    if(contentsSelected === 1) {
      $('.js-num-selected').html(contentsSelected + " selezionato");
      $('.js-tool-single').show();
    } else {
      $('.js-num-selected').html(contentsSelected + " selezionati");
      $('.js-tool-single').hide();
    }

});

$('.contents__link').click(function(e){
    e.stopPropagation();
//    $('.contents__item').each(function(){
//        if( $(this).hasClass('selected') ){
//            $(this).removeClass('selected');
//        }
//    });
//    contentsSelected = 0;
//    $('.contents-tools').hide();
//    $('.drawer').addClass('drawer--show');
});

$('.add-multimedia').click(function(e){
    e.stopPropagation();
    $('.drawer').addClass('drawer--show');
});

$('.main-area').click(function(e){
    e.stopPropagation();
    if($('.drawer').hasClass('drawer--show')){
        $('.drawer').removeClass('drawer--show');
    }
});





