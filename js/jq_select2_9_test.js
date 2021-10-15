$(function() {
    var arr1 = ["서울", "대전", "부산", "전주"];
    var arr2 = ["한국", "미국", "일본", "중국"];
    var obj = {
        name: "정부장",
        area: "서울",
    };
    // inArray() 메서드 : 배열에 저장된 데이터 중 지정한 데이터를 찾아 인덱스 값을 반환한다.
    // $.inArray(data, Array, start index)
    var idxNum = $.inArray("부산", arr1);
    console.log(idxNum);

    // isArray() 메서드  :지정한 데이터가 배열 객체면 true를, 배열 객체가 아니면 false를 반환한다.
    // $.isArray(object)
    var okArray1 = $.isArray(arr1); //배열 객체면 true
    var okArray2 = $.isArray(obj); //배열 객체가 아니면 false
    console.log(okArray1);
    console.log(okArray2);

    // merge() 메서드 : 두 배열 객체를 하나의 객체로 묶는다.
    // $.merge(Array1, Array2)
    $.merge(arr2, arr1);
    console.log(arr2); // ["한국","미국","일본","중국","서울","대전","부산","전주"]
});