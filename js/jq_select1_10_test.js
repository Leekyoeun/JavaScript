$(function() {
    var style_1 = {
        "background-color": "#0ff",
        border: "2px solid #f00",
    };
    var style_2 = {
        "background-color": "#ff0",
        border: "2px dashed #f00",
    };

    //형(이전) / 동생(다음) 요소 선택자
    //.prev() : 선택한 요소를 기준으로 이전에 오는 형제 요소만 선택한다.
    $(".txt").prev().css(style_1);

    //$("요소 선태1+요소 선택2")
    //선택한 요소를(요소 선택1) 기준으로 바로 다음에 오는 선택한 요소(요소 선택2)만 선택한다.
    $(".txt+p").css(style_2);

    //.next() : 선택한 요소를 기준으로 다음에 오는 형제 요소만 선택한다.
    $(".txt").next().next().css(style_2);
});