$(document).ready(function(){
    $('.carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_arrow.png" alt="previous"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arrow.png" alt="next"></button>',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                cssEase: 'linear',
                arrows: false
              }
            }
        ]
    });
  });