$(function() {
    // $("요소 선택:nth-child(숫자)")
    // 1) 선택한 요소 중 지정한 숫자에 위치한 요소를 선택한다.
    $("#menu1 li:nth-child(1)").css({ "background-color": "#ff0" });
    // $("요소 선택:nth-child(숫자n)")
    // 2) 선택한 요소 중 지정한 배수에 위치한 요소를 선택한다.
    $("#menu1 li:nth-child(2n)").css({ border: "2px dashed #f00" });
    // $("요소 선택:nth-last-child(숫자)")
    // 선택한 요소 중 마지막 위치에서 지정한 숫자에 위치한 요소를 선택한다.
    $("#menu2 li:nth-last-child(2)").css({ "background-color": "#0ff" });
});