$(function() {
    // contains() 탐색 선택자 : 선택한 요소 중 지정한 텍스트를 포함하는 요소만 선택한다.
    $("#inner_1 p:contains(내용1)").css({ "background-color": "#ff0" });
    // has() 탐색 선택자 : 선택한 요소 중 지정한 태그를 포함하는 요소만 선택한다.
    $("#inner_1 p:has(strong)").css({ "background-color": "#0ff" });
    // contents() 탐색 선택자 : 선택한 요소 중 하위 요소 중 1 깊이의 텍스트와 태그 노드를 선택한다.
    $("#outer_wrap").contents().css({ border: "1px dashed #00f" });
    // not() 탐색 선택자 : 선택한 요소 중 지정한 요소만 제외한 채 선택한다.
    $("#inner_2 p").not(":first").css({ "background-color": "#0f0" });
    // end() 탐색 선택자 : 필터링되기 이전의 선택자가 적용되도록 한다.
    $("#inner_2 p").eq(2).end().css({ color: "#f00" });
});