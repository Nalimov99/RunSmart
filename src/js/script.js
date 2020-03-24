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

    $('ul.tab').on('click', 'li:not(.tab__item_active)', function() {
      $(this)
        .addClass('tab__item_active').siblings().removeClass('tab__item_active')
        .closest('div.container').find('div.catalog__item').removeClass('catalog__item_active').eq($(this).index()).addClass('catalog__item_active');
    });

    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e){
          e.preventDefault();
          $('.card__content').eq(i).toggleClass('card__content_active');
          $('.card__full-descr').eq(i).toggleClass('card__full-descr_active');
        })
      })
    }
    toggleSlide('.card__link');
    toggleSlide('.card__link-back');
  });