$(function() {
    // find() 탐색 선택자 : 선택한 하위 요소 중에서 find()로 필터링한 요소만 선택한다.
    $("#inner_1").find(".txt1").css({ "background-color": "#ff0" });
    // filter() 탐색 선택자 : 선택한 요소 중에서 filter()로 필터링한 요소만 선택한다.
    $("#inner_1 p").filter(".txt2").css({ "background-color": "#0ff" });
    $("#inner_2 p")
        .filter(function(idx, obj) {
            console.log(idx);
            return idx % 2 == 0;
        })
        .css({ "background-color": "#0f0" });
});