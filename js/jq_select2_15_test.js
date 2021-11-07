$(function() {
    // is() 메소드 : 선택한 요소의 상태가 지정된 속성과 일치하면 true를 반환하고,
    // 그렇지 않으면 false를 반환한다.
    var result_1 = $("#inner_1 p").eq(0).is(":visible");
    console.log(result_1);

    var result_2 = $("#inner_1 p").eq(1).is(":visible");
    console.log(result_2);

    var result_3 = $("#chk1").is(":checked");
    console.log(result_3);

    var result_4 = $("#chk2").is(":checked");
    console.log(result_4);
});