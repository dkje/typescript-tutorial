//explicit types 명시적 타입
let character: string;
let age: number;
let isLoggedIn: boolean;

// age ='30';
age = 30;
// isLoggedIn =20;
isLoggedIn = true;

//arrays
let ninjas: string[];
// 고정 타입 외의 값을 넣을 수 없다
// ninjas = [10, 20];
ninjas = ['yoshi', 'mario'];
ninjas.push('ok?');
console.log(ninjas);

// let blankArr: string[];
// 빈 배열로 초기화 되지 않으면 push할 수 없다
// blankArr.push('1234');
let blankArr: string[] = [];
blankArr.push('1234');
console.log(blankArr);

//union types 여러타입 사용하기
let mixed: (string | number | boolean)[] = [];
mixed.push('hello');
mixed.push(30);
mixed.push(false);
console.log(mixed);

let uid: string | number;
uid = '123';
uid = 123;
// uid = false;

//objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = ['yoshi', 30];

let ninjaTwo: {
    name: string;
    age: number;
    beltColour: string;
};

ninjaTwo = {
    name: '123',
    age: 30,
    beltColour: 'blue',
};
