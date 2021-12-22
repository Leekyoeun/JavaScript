// 요소의 높이 / 너비 메소드
// height(), width() 메소드는 여백 및 선 두께를 제외한 순수 요소의 높잇값과 너빗값을 계산한다.

$(function() {
    // 1) $(요소 선택).height(); / $(요소 선택).width();
    // $(요소 선택).height(값); / $(요소 선택).width(값);
    // 요소의 높잇값과 너빗값을 반환 또는 변경한다.
    var w1 = $("#p1").width();
    console.log(w1);

    // innerHeight(), innerWidth() 메소드는 여백을 포함한 요소의 높잇값과 너빗값을 계산한다.
    // $(요소 선택).innerHeight(); / $(요소 선택).innerWidth();
    // $(요소 선택).innerHeight(값); / $(요소 선택).innerWidth(값);
    // 여백을 포함한 요소의 높잇값과 너빗값을 반환 또는 변경한다.
    var w2 = $("#p1").innerWidth();
    console.log(w2);

    //outerHeight(), outerWidth() 메소드는 여백 및 선을 포함한 요소의 높잇값과 너빗값을 계산한다.
    // $(요소 선택).outerHeight(); / $(요소 선택).outerWidth();
    // $(요소 선택).outerHeight(값); / $(요소 선택).outerWidth(값);
    // 여백 및 선 두께를 포함한 요소의 높잇값과 너빗값을 반환 또는 변경한다.
    var w3 = $("#p1").outerWidth();
    console.log(w3);

    $("#p2").outerWidth(100).outerHeight(100);
});