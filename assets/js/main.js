$('#dropdownCart, #cart').hover(function () {
  $('#cart').show();
  $('#cart').css("opacity", 1);
})

$(function() {
  $('#menu-product, #dropdown-product').hover(function() {
    $('#dropdown-product').css('margin-top', '0');
    $('#dropdown-product').css('opacity', '1');
    $('.headerIndex').css('background', '#fff');
  }, function() {
    // on mouseout, reset the background colour
    $('#dropdown-product').css('margin-top', '-500px');
    $('#dropdown-product').css('opacity', '0');
    $('.headerIndex').css('background', '');
  });
});

$(function () {
  var $win = $(window); // or $box parent container
  var $box = $("#cart");
  var $pop = $("#dropdownCart");

  $win.on("click.Bst", function (event) {
    if ($box.has(event.target).length == 0 && !$box.is(event.target) && $pop.has(event.target).length == 0 && !$pop.is(event.target)) {
      $box.css("opacity", 0);
      $box.hide();
      $('.popup-cart').show()
      $('.popup-notify').hide()
    } else {
      // $box.css("opacity", 1);
    }
  });
});

$(document).ready(function () {
  $('.count').prop('disabled', true);
  $(document).on('click', '.plus', function () {
    $('.count').val(parseInt($('.count').val()) + 1);
  });
  $(document).on('click', '.minus', function () {
    $('.count').val(parseInt($('.count').val()) - 1);
    if ($('.count').val() == 0) {
      $('.count').val(1);
    }
  });
});

window.onscroll = function () { myFunction() };

function myFunction() {
  if (window.pageYOffset > 20) {
    $('.headerIndex').css('background-color', '#fff')
    $('.headerIndex').css('box-shadow', '0px 4px 4px rgba(0, 0, 0, 0.25)')
    $('.header').css('height', '61px')
    $('.header .navbar-main').css('padding-top', '0px')
    $('.header .navbar-main').css('padding-bottom', '0px')
    $('.dropdown-fullwidth').css('top', '61px')
  } else {
    $('.headerIndex').css('background-color', '')
    $('.headerIndex').css('box-shadow', '')
    $('.header').css('height', '')
    $('.header .navbar-main').css('padding-top', '')
    $('.header .navbar-main').css('padding-bottom', '')
    $('.dropdown-fullwidth').css('top', '')
  }
}


$(document).ready(function () {
  $('#ex1').zoom();
});
function openOption(evt, nameOption) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(nameOption).style.display = "block";
  evt.currentTarget.className += " active";
}
function changeimg(url, e) {
  document.getElementById("img").src = url;
  let nodes = document.getElementById("thumb_img");
  let modalimg_child = nodes.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('active')
  }
  e.classList.add('active');

}
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
// showSlides(slideIndex);

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