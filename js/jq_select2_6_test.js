$(function() {
    // only-child/slice(index) 선택자
    // $("요소 선택").slice(start index, end index)
    // 지정 구간 인덱스의 요소를 선택한다. 예를 들어 slice(1,3)은 1초과 3이하의 요소를 선택한다.
    $("#menu1 li").slice(1, 3).css({ "background-color": "#ff0" });
    //$("요소 선태:only-child")
    // 선택한 요소가 부모 요소에게 하나뿐인 자식 요소면 선택한다.
    $("li:only-child").css({ "background-color": "#0ff" });
});