$(function() {
    var style_1 = {
        "background-color": "#0ff",
        border: "2px solid #f00",
    };

    //범위 제한 전체 형/동생 요소 선택자
    //선택한 요소를 기준으로 형제 요소 중 지정한 범위 내의 전체 형 요소 또는 전체 동생 요소를 선택한다.

    //선택한 요소를 기준으로 범위 제한 요소까지 전체 형 요소를 선택한다.
    $(".txt3").prevUntil(".title").css(style_1);
    //선택한 요소를 기준으로 범위 제한 요소까지 전체 동생 요소를 선택한다.
    $(".txt3").nextUntil(".txt6").css(style_1);
});