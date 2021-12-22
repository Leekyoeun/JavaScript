$(function() {
    // val() 메소드
    // 선택한 폼 요소의 value 속성값을 가져오거나 새 값을 적용할 때 사용합니다.
    // 1) $("요소 선택").val();
    // 선택한 폼 요소의 value 속성값을 가져온다.
    // 2) $("요소 선택").val("새 값");
    // 요소를 선택하여 value 속성에 새 값을 적용한다.
    var result_1 = $("#user_name").val();
    console.log(result_1);

    $("#user_id").val("javascript");

    var result_2 = $("#user_id").prop("defaultValue");
    console.log(result_2);
});