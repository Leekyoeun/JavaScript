$(function() {
    var arr1 = [{
            area: "서울",
            name: "무대리",
        },
        {
            area: "부산",
            name: "홍과장",
        },
        {
            area: "대전",
            name: "빅마마",
        },
    ];

    // 배열에 저장된 객체 수만큼 메소드를 반복 실행한다.
    // 메소드가 반복 실행될 때마다 배열에 저장된 객체에 인덱스 오름차순으로 접근한다.
    // $.map() 메소드는 배열에 저장된 데이터 수만큼 메소드를 반복 실행한다.
    // 메소드에서 반환된 데이터는 새 배열에 저장되고 그 배열 객체를 반환한다.
    // $.map(Array, function(매개변수1, 매개변수2){ return 데이터;})
    var arr2 = $.map(arr1, function(a, b) {
        if (a.area == "서울") {
            return a;
        }
    });
    console.log(arr2);
    console.log("====first End====");

    // $.grep() 메소드는 배열에 저장된 데이터 수만큼 메소드를 반복 실행하며 인덱스 오름차순으로 배열의 데이터를 불러온다.
    // 배열의 반환값이 true이면 데이터가 새 배열에 저장되고 배열을 반환한다.
    // 배열에 저장된 요소만큼 메소드를 반복 실행한다.
    // 메소드가 실행될 때마다 매개변수1, 매개변수2에는 배열의 데이터와 인덱스값이 인덱스 오름차순으로 대입된다.
    // 반환된 데이터가 true면 인덱스 오름차순으로 데이터를 새 배열에 저장하고 새롭게 가공된 배열 객체를 반환한다.
    // $.grep(Array,function(매개변수1, 매개변수2){ return [true | false];})
    var arr3 = $.grep(arr1, function(a, b) {
        // 배열의 데이터 수만큼 메소드가 실행된다.
        // 객체의 속성값이 '서울'이면 true를 반환한다.
        if (a.area == "서울") {
            return true;
        } else {
            return false;
        }
    });
    console.log(arr3);
    console.log("====Second End====");
});