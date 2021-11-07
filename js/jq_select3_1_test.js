$(function() {
    // html() 메소드 : 선택한 요소의 하위 요소를 가져와 문자열로 반환하거나
    // 하위 요소를 전부 제거하고 새 요소로 바꿀 때 사용한다.
    var result_1 = $("#sec_1").html();
    console.log(result_1);
    $("#sec_1 p").html('<a href="#">Text1</a>');

    // text() 메소드 : 선택한 요소에 포함되어 있는 전체 텍스트를 가져오거나
    // 선택한 하위 요소를 전부 제거하고 새 텍스트를 생성할 때 사용한다.
    var result_2 = $("#sec_2").text();
    console.log(result_2);
    $("#sec_2 h2").text("text()");
});