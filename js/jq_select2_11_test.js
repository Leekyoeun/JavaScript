$(function() {
    // 속성과 값에 따른 탐색 선택자
    // 선택한 요소 중 지정한 속성과 일치하는 속성이 있는지, 없는지의 포함 여부를 땆 요소를 선택한다.
    // $("요소 선택[속성]") : 선택한 요소 중 지정한 속성이 포함된 요소만 선택한다.
    $("#wrap a[target]").css({ color: "#f00" });
    // $("요소 선택[속성^=값]")
    // 선태한 요소 중 속성값이 명시한 값으로 시작하는 요소만 선택한다.
    $("#wrap a[href^=https]").css({ color: "0f0" });
    // $("요소 선택[속성$=값]")
    // 선택한 요소 중 속성값이 명시한 값으로 끝나느 요소만 선택한다.
    $("#wrap a[href$=net]").css({ color: "#000" });
    // $("요소 선택[속성*=값]")
    // 선택한 요소 중 속성값이 명시한 값을 포함하는 요소만 선택한다.
    $("#wrap a[href*=google]").css({ color: "#00f" });
    // $(":type 속성값")
    // input 요소 중 type 속성값이 일치하는 요소만 선택한다.
    $("#member_f :text").css({ "background-color": "#ff0" });
    $("#member_f :password").css({ "background-color": "#0ff" });
});