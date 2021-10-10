//first-of-type / last-of-type 선택자
$(function() {
    //first-of-type 선택자 : 선택한 요소의 무리 중 첫 번째 요소만 선택한다.
    //기본형 : $("요소 선택:first-of-type")
    $("li:first-of-type").css({ "background-color": "#ff0" });
    //last-of-type 선택자 : 선택한 요소의 무리 중 마지막에 위치한 요소만 선택한다.
    //기본형 : $("요소 선택:last-of-type")
    $("li:last-of-type").css({ "background-color": "#0ff" });
});