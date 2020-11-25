$(document).ready(function () {

    $.ajax({
        url: "https://LoremIpsum.com/api/press/list",
        dataType: "jsonp",
        async: true,
        cache: true,
        data: {
            opt: 0,
            keyword: "",
            page: 1,
            size: 16
        },
        success: function (d) {
            var azHtml = [];
            var o = d.list;
            for (var i = 0; i < o.length; i++) {
                azHtml.push('<div class="item">');
                if (o[i].photo_fullpath.length > 0) {
                    azHtml.push('<a href="/pr/press/view.html?idx=' + o[i].code + '"><span class="img"><img src="https://LoremIpsum.com/data/' + o[i].photo_fullpath + '" alt=""></span><p class="txt"><span class="ellipsis-multi">' + o[i].title + '</span></p></a>');
                }
                else {
                    azHtml.push('<a href="/pr/press/view.html?idx=' + o[i].code + '"><span class="img"><img src="https://LoremIpsum.com/images/pr_default.jpg" alt=""></span><p class="txt"><span class="ellipsis-multi">' + o[i].title + '</span></p></a>');
                }
                azHtml.push('</div>');
            }
            $(".pr-slide").html(azHtml.join(''));
            $('.pr-slide').slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                draggable: false
            });
        },
        error: function (request, status, error) {
        }
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


});
