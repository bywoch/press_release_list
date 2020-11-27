# Press Release List
## 외부 API에서 데이터 목록을 검색하고 JavaScript의 AJAX를 사용하여 처리

- url 매개변수에 지정된 주소로 AJAX 요청을 보내고, 서버에서 반환된 데이터를 성공 시 success 콜백 함수에서 처리. 
- 데이터는 JSONP 형식으로 가져오며, data 매개변수를 통해 요청 시 필요한 파라미터들을 전달.

- 응답이 성공하면 success 콜백 함수에서 반환된 데이터를 for 반복문을 사용하여 처리.
- 데이터의 각 항목에 따라 HTML을 생성하고, .pr-slide 클래스를 가진 HTML 요소에 해당 HTML을 추가. 
- 그런 다음, .pr-slide 요소에 slick 라이브러리를 적용하여 슬라이드 쇼를 생성.

- 오류가 발생할 경우 error 콜백 함수에서 오류 처리.