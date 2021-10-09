$(function() {
    //1) 인자값을 사용해 CSS 속성과 값을 전달하는 방식
    //$("요소 선택").css("속성명1","값1").css("속성명2","값2");
    $("#wrap>h1").css("border", "2px dashed #f00");

    //2) 객체를 사용해 CSS 속성과 값을 전달하는 방식
    //$("요소 선택").css("속성명1":"값1","속성명2":"값2"...."속성명N":"값N");
    $("#wrap>section").children().css({
        "background-color": "yellow",
        border: "2px solid #f00",
    });
});