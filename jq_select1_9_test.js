$(function() {
    //자식 요소 선택자
    //1) 인자값을 사용해 CSS 속성과 값을 전달하는 방식
    //$("요소 선택").css("속성명1","값1").css("속성명2","값2");
    //선택한 요소를 기준으로 지정한 자식 요소만 선택한다.
    $("#wrap>h1").css("border", "2px dashed #f00");

    //2) 객체를 사용해 CSS 속성과 값을 전달하는 방식
    //$("요소 선택").css("속성명1":"값1","속성명2":"값2"...."속성명N":"값N");
    //선택한 요소를 기준으로 모든 자식 요소를 선택한다.
    $("#wrap>section").children().css({
        "background-color": "yellow",
        border: "2px solid #f00",
    });
});