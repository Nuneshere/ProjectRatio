(function($){
  $(function(){

    $(".button-collapse").sideNav();
        
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$('ul.tabs a').on('click', function(e){
  if($(this).attr("target") ) {
    window.location = $(this).attr("href");
  }
});

$(".button-collapse").sideNav();
