//가장 가까운 상위 요소 선택자
//선택한 요소를 기준으로 가장 가까운 상위 요소만 선택할 때 사용한다.
$(function() {
    $(".txt1").closest("div").css({ border: "2px solid #f00" });
});