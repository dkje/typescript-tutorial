//arrays
// 배열 생성시 초기값으로 고정 타입을 정한다.
var names = ['name1', 'name2', 'name3'];
names.push('toad');
// names.push(3);
// names[0] = 3;
var numbers = [10, 20, 30, 40];
numbers.push(50);
// numbers.push('why');
// numbers[1] = 'shaun';
// 여러가지 타입을 넣어 초기화 했을 경우는 모든 타입이 들어갈 수 있다.
var mixed = ['ken', 4, 'chun-li', 8, 9, true];
mixed.push(true);
// 객체의 속성 값도 초기값에 따른 고정 타입을 갖는다
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'tyw';
// ninja.age = 'tesd';
// 새 속성 할당 가능
// ninja.skills = ['fighting', 'sneaking'];
// 객체를 재정의할때 기존의 속성값을 / 속성값만 모두 갖고있지 않으면 오류 발생
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
};
