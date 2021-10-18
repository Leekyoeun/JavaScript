$(function() {
    $("#inner_1 p:contains(내용1)").css({ "background-color": "#ff0" });
    $("#inner_1 p:has(strong)").css({ "background-color": "#0ff" });
    $("#outer_wrap").contents().css({ border: "1px dashed #00f" });
    $("#inner_2 p").not(":first").css({ "background-color": "#0f0" });
    $("#inner_2 p").eq(2).end().css({ color: "#f00" });
});