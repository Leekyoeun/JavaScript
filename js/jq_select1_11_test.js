$(function() {
    var style_1 = {
        "background-color": "#0ff",
        border: "2px solid #f00",
    };
    var style_2 = {
        "background-color": "#ff0",
        border: "2px dashed #f00",
    };

    //전체 형(이전) / 동생(다음) 요소 선택자
    //전체 형 요소 선택자 : 선택한 요소를 기준으로 이전에 오는 전체 형제 요소를 선택한다.
    //전체 동생 요소 선택자 : 선택한 요소를 기준으로 다음에 오는 전체 형제 요소를 선택한다.
    $(".txt").prevAll().css(style_1);
    $(".txt").nextAll().css(style_2);
});