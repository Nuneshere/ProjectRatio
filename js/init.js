(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
      $('.parallax').parallax();
});

$('ul.tabs a').on('click', function(e){
  if($(this).attr("target") ) {
    window.location = $(this).attr("href");
  }
});