//explicit types 명시적 타입
var character;
var age;
var isLoggedIn;
// age ='30';
age = 30;
// isLoggedIn =20;
isLoggedIn = true;
//arrays
var ninjas;
// 고정 타입 외의 값을 넣을 수 없다
// ninjas = [10, 20];
ninjas = ['yoshi', 'mario'];
ninjas.push('ok?');
console.log(ninjas);
// let blankArr: string[];
// 빈 배열로 초기화 되지 않으면 push할 수 없다
// blankArr.push('1234');
var blankArr = [];
blankArr.push('1234');
console.log(blankArr);
//union types 여러타입 사용하기
var mixed = [];
mixed.push('hello');
mixed.push(30);
mixed.push(false);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
// uid = false;
//objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = ['yoshi', 30];
var ninjaTwo;
ninjaTwo = {
    name: '123',
    age: 30,
    beltColour: 'blue'
};
