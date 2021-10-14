//even/odd 선택자
//even 선택자 : 선택한 요소 중 짝수 인덱스 요소만 선택한다.
//odd 선택자 : 선택한 요소 중 홀수 인덱스 요소만 선택한다.
$(function() {
    $("#menu li:even").css({ "background-color": "#ff0" });
    $("#menu li:odd").css({ "background-color": "#0ff" });
});