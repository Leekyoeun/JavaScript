//eq(index) / It(index) / gt(index) 탐색 선택자
$(function() {
    //eq(index) 탐색 선택자 : 선택한 요소 중 지정한 인덱스가 참조하는 요소만 선택한다.
    //$("요소 선택:eq(index)") 또는 $("요소 선택").eq(index)
    $("#menu li").eq(2).css({ "background-color": "#ff0" });
    //It(index) 선택자 : 선택한 요소 중 지정한 인덱스보다 작은 인덱스를 참조하는 요소만 선택한다.
    //$("요소 선택:It(index)")
    $("#menu li:lt(2)").css({ "background-color": "#0ff" });
    //gt(index) 선택자 : 선택한 요소 중 지정한 인덱스보다 큰 인덱스를 참조하는 요소만 선태한다.
    //$("요소 선택:gt(index)")
    $("#menu li:gt(2)").css({ "background-color": "#f0f" });
});