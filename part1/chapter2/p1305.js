/*
'for' 반복문을 'while' 반복문으로 바꾸기
for 반복문을 while 반복문으로 바꾸되, 동작 방식에는 변화가 없도록 해보세요.
출력 결과도 동일해야 합니다.

for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}
-> 0, 1, 2
*/

let i = 0;
while(i < 3) {
    console.log(`number ${i}!`);
    i++;
}