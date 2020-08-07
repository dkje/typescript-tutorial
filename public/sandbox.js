"use strict";
// let greet = () => {
//     console.log('hello, world');
// };
// 함수를 다른 타입으로 재할당 불가능
// greet = 'hello';
var greet;
// greet = 'hello';
greet = function () {
    console.log('hello, again ');
};
// 변수명 뒤의 ? 은 optional한 인자를 표시
// es6의 초기값 할당 기능도 여전히 사용 가능함
var add = function (a, b, c) {
    if (b === void 0) { b = 10; }
    console.log(a + b);
    console.log(c);
    //return 값을 지정하지 않으면 void 타입으로 설정됨
    // 명시적으로 void 지정도 가능 (반드시 return값이 없는 함수일때 사용)
};
add(5);
// 인자의 괄호 뒤에 타입을 붙여 리턴 타입을 고정시킬 수 있지만 optional한 사항
// 때때로 필요할 때 사용함
var minus = function (a, b) {
    return a + b;
};
// 함수의 return 값으로 변수에 할당할 경우
// 타입 체크를 return값의 타입으로 한다
// let result = minus(10, 7);
// result = '512';
