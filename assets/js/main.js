$('#dropdownCart').mouseenter(function(){
    $('#cart').css("opacity", 1);
  })
  
  $(function(){		
    var $win = $(window); // or $box parent container
    var $box = $("#cart");
    var $pop = $("#dropdownCart");
    
     $win.on("click.Bst", function(event){		
      if ( $box.has(event.target).length == 0 && !$box.is(event.target) && $pop.has(event.target).length == 0 && !$pop.is(event.target)){
        $box.css("opacity", 0);
        $('.popup-cart').show()
      $('.popup-notify').hide()
      } else {
        // $box.css("opacity", 1);
      }
    });
  });

  $(document).ready(function(){
    $('.count').prop('disabled', true);
     $(document).on('click','.plus',function(){
    $('.count').val(parseInt($('.count').val()) + 1 );
    });
      $(document).on('click','.minus',function(){
      $('.count').val(parseInt($('.count').val()) - 1 );
        if ($('.count').val() == 0) {
        $('.count').val(1);
      }
        });
 });

 window.onscroll = function() {myFunction()};

 function myFunction() {
    if (window.pageYOffset > 20) {
      $('.headerIndex').css('background-color','#fff')
      $('.headerIndex').css('box-shadow','0px 4px 4px rgba(0, 0, 0, 0.25)')
      $('.header').css('height','61px')
      $('.header .navbar-main').css('padding-top','0px')
      $('.header .navbar-main').css('padding-bottom','0px')
    } else {
      $('.headerIndex').css('background-color','')
      $('.headerIndex').css('box-shadow','')
      $('.header').css('height','')
      $('.header .navbar-main').css('padding-top','')
      $('.header .navbar-main').css('padding-bottom','')
    }
 }