$(document).ready(function () {

    $.ajax({
        url: "https://LoremIpsum.com/api/press/list", // API의 엔드포인트 URL
        dataType: "jsonp", // 데이터 타입 (JSONP를 사용하는 이유는 동일 출처 정책을 우회하기 위함)
        async: true, // 비동기 여부 (true면 비동기, false면 동기)
        cache: true, // 캐시 사용 여부
        data: {
            opt: 0, // 파라미터: 옵션
            keyword: "", // 파라미터: 키워드
            page: 1, // 파라미터: 페이지 번호
            size: 16 // 파라미터: 가져올 데이터 개수
        },
        success: function (d) {
            // 요청이 성공했을 때 실행되는 콜백 함수
            var azHtml = [];
            var o = d.list; // API에서 반환된 데이터의 "list" 항목
            for (var i = 0; i < o.length; i++) {
                azHtml.push('<div class="item">');
                if (o[i].photo_fullpath.length > 0) {
                    // 이미지 경로가 존재하는 경우
                    azHtml.push('<a href="/pr/press/view.html?idx=' + o[i].code + '"><span class="img"><img src="https://LoremIpsum.com/data/' + o[i].photo_fullpath + '" alt=""></span><p class="txt"><span class="ellipsis-multi">' + o[i].title + '</span></p></a>');
                }
                else {
                    // 이미지 경로가 존재하지 않는 경우
                    azHtml.push('<a href="/pr/press/view.html?idx=' + o[i].code + '"><span class="img"><img src="https://LoremIpsum.com/images/pr_default.jpg" alt=""></span><p class="txt"><span class="ellipsis-multi">' + o[i].title + '</span></p></a>');
                }
                azHtml.push('</div>');
            }
            $(".pr-slide").html(azHtml.join('')); // 가져온 데이터를 HTML 요소 추가
            $('.pr-slide').slick({
                // 가져온 데이터를 슬라이드 표시하기 위해 slick 라이브러리 사용
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                draggable: false
            });
        },
        error: function (request, status, error) {
            // 요청이 실패시 실행되는 콜백 함수
            // 오류 처리 해당 구역 구현.
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
