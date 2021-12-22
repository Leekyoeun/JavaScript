$(function() {
    // prop() 메소드 : 선택한 폼 요소(선택 상자, 체크 박스, 라디오 버튼)의 상태 속성값을 가져오거나 새롭게 설정할 때 사용한다.
    // 1) $("요소 선택").prop("[checked | selected]");
    // 선택한 폼 요소가 체크된 상태인지, 선택된 상태인지 알 수 있다.
    // 2) $("요소 선택").prop("[checked | selected]", [true | false|]);
    // 폼 요소를 선택하여 체크 또는 선택 상태를 바꿀 수 있다.
    // 3) $("요소 선태").prop("[tagName | nodeType | selectedIndex | defaultValue]");
    // 선택한 요소의 태그명이나 노드 타입, 선택된 옵션의 인덱스 값을 구한다.
    // 이때 폼 요소에 prop("defaultValue")를 사용하면 사용자가 value 속성값을 바꿔도 초기의 value 속성값을 가져온다.
    var result_1 = $("#chk1").prop("checked");
    console.log(result_1);

    var result_2 = $("#chk2").prop("checked");
    console.log(result_2);

    var result_2 = $("#chk3").prop("checked", true);

    var result_3 = $("#se_1").prop("selectedIndex");
    console.log(result_3);
});