//first/last 선택자
//first선택자 : 선택도니 요소 중 첫 번째 요소만 선택한다.
//기본형 : $("요소 선택:first") 또는 $("요소 선택").first()
//last선택자 : 선택된 요소중 마지막 요소만 선택한다.
//기본형 : $("요소 선택:last") 또는 $("요소 선택").last()
$(function() {
    $("#menu li:first").css({ "background-color": "#ff0" });
    $("#menu li:last").css({ "background-color": "#0ff" });
});