$(function() {
    // $.index() 메소드는 지정 선택 요소를 찾아서 인덱스값일 반환한다.
    // $("요소 선택").index("지정 선택 요소");
    var idxNum = $("li").index($("#list3"));
    console.log(idxNum);
});