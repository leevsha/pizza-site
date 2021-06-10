let nonActive = document.getElementsByClassName("non-active");
for (let i = 0; i < nonActive.length; i++) {
    const element = nonActive[i];
    element.onmouseover = function () {
        element.style.transition = "all 0.5s";
        element.classList.remove("non-active");
        element.classList.add("text-warning");
    }
    element.onmouseout = function () {
        element.classList.remove("text-warning");
        element.classList.add("non-active");
        element.classList.add("text-secondary");
    }
}
let activecar = document.getElementsByClassName("activecar");
let nonActiveCar = document.getElementsByClassName("non-activecar");
Array.from(nonActiveCar).forEach((element, index) => {
    let el = activecar[index]
    element.onmouseover = function () {
        element.style.transition = "all 0.5s";
        element.classList.remove("non-activecar");
        element.classList.add("activecar")
        element.classList.add("bg-warning");
        el.style.transition = "all 0.5s";
        el.classList.remove("activecar");
        el.classList.remove("bg-warning");
        el.classList.add("border");
        el.classList.add("border-white");
        el.classList.add("text-white");

    }
    element.onmouseout = function () {
        element.classList.remove("bg-warning");
        element.classList.add("non-activecar");
        element.classList.remove("activecar")
        el.classList.add("activecar");
        el.classList.add("bg-warning");
        el.classList.remove("border");
        el.classList.remove("border-white");
        el.classList.remove("text-white");
        el.classList.add("text-dark");
    }
});
let nonActiveBar = document.getElementsByClassName("non-activebar");
for (let j = 0; j < nonActiveBar.length; j++) {
    const e = nonActiveBar[j];
    e.onmouseover = function () {
        e.style.transition = "all 0.5s";
        e.classList.remove("non-activebar");
        e.classList.add("text-dark");
        e.classList.add("bg-warning");

    }
    e.onmouseout = function () {
        e.classList.remove("bg-warning");
        e.classList.add("non-active");
        e.classList.remove("text-dark");
        e.classList.add("text-warning");
    }
}
let addToCart = document.getElementsByClassName("add-to-cart");
Array.from(addToCart).forEach(tags => {
    tags.onmouseover = function(){
        tags.style.transition = "all 0.5s"
        tags.classList.add("bg-warning");
        tags.classList.remove("text-white");
        tags.classList.add("text-dark");
    }
    tags.onmouseout = function(){
        tags.classList.remove("bg-warning");
        tags.classList.remove("text-dark");
        tags.classList.add("text-white");


    }
});
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
var check = 1;
var target = $('#achievements'); // You counter class
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;

$(window).scroll(function() {
  var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem && check) {
    $('.mainnums').each(function() {
      $(this).prop('Counter', -1).animate({
        CoWunter: $(this).text()
      },{
        duration: 2000,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
    check = 0;
  }
});