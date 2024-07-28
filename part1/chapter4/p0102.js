/*
객체가 비어있는 지 확인하기

객체에 프로퍼티가 하나도 없는 경우 true,
그렇지 않은 경우 false를 반환해주는 함수 isEmpty(obj)를 만들어 보세요.
*/


function isEmpty(prop) {
    for (let key in prop) return false;
    return true;
}

let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));
