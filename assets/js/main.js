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
        $box.css("opacity", 1);
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

 function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
}