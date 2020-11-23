$(document).ready(function () {
    window.onload = function () {
        $('.pr-slide').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            draggable: false
        });
        $(".main-pr .pr-slide .slick-prev").text('이전');
        $(".main-pr .pr-slide .slick-next").text('다음');

        // slick pr 웹 접근성
        $('.slick-list .slick-active, .slick-list .slick-slide a').removeAttr('tabindex');
        $('.slick-list .item a').hide();
        $('.slick-list .slick-active a').show();
        $('.slick-list .slick-active').last().next().find('a').show();
        $('.slick-list .slick-current').prev().find('a').show();

        $('.slick-arrow').click(function () {
            $('.slick-list .slick-active a').show();
            $('.slick-list .slick-active').last().next().find('a').show();
            $('.slick-list .slick-current').prev().find('a').show();
        });

    }
});
