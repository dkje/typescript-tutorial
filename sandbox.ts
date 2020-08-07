const charactor = 'luigi??';

console.log(charactor);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach((input) => {
    console.log(input);
});

// ts는 js 파일로 컴파일해 사용해야한다
// terminal로 ts 컴파일하기
// tsc 파일명.ts 파일명.js
// js 파일명을 생략하면 같은 이름으로 컴파일함

// tsc 파일명.ts -w
// watch 옵션을 주면 수정시 자동으로 컴파일함
