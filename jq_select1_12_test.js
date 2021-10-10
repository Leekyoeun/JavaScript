$(function() {
    var style_1 = {
        "background-color": "#0ff",
        border: "2px solid #f00",
    };
    //전체 형제 요소 선택자
    //선택한 요소의 모든 형제 요소를 선택한다.
    $(".txt").siblings().css(style_1);
});