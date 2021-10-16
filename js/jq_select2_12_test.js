$(function() {
    // 속성 상태에 따른 탐색 선택자
    // 선택한 요소 중 속성 상태에 따라 요소를 선택한다.

    // $("요소 선택: [visible | hidden]")
    // 선택한 요소 중 숨겨진 상태 또는 보이는 상태의 요소만 선택한다.
    $("#wrap p:hidden").css({
        display: "block",
        background: "#ff0",
    });
    // $(":selected")
    // 선택 상자 중 현재 선택된 옵션 요소만 선택한다.
    var z1 = $("#zone1 :selected").val();
    console.log(z1);

    // $(":checked")
    // 체크 박스(checkbox) 또는 라디오(radio) 버튼 요소 중 체크된 요소만 선택한다.
    var z2 = $("#zone2 :checked").val();
    console.log(z2);

    var z3 = $("#zon3 :checked").val();
    console.log(z3);
});