////////// lesson2
// ts는 js 파일로 컴파일해 사용해야한다
// terminal로 ts 컴파일하기
// tsc 파일명.ts 파일명.js
// js 파일명을 생략하면 같은 이름으로 컴파일함
// tsc 파일명.ts -w
// watch 옵션을 주면 수정시 자동으로 컴파일함

////////// lesson3
// ts는 변수 타입을 지정 가능하다
// 타입 에러 발생 시 신텍스 에러로 체크 가능하다

let character: string = 'mario';
let age: number = 30;
let isBlackBelt: boolean = false;

// character = 50
character = 'test';
//age = 'yoshi';
age = 50;
// isBlackBelt = 'yes';
isBlackBelt = true;
const circ = (diameter: number) => {
    return diameter * Math.PI;
};

console.log(circ(6.4));
