//Dynamic Types

let age: any = 25;

age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'nameaname' };
console.log(age);

let mixed: any[] = [];
mixed.push('123');
mixed.push(123);
mixed.push(false);
console.log(mixed);

let ninja: { name: any; age: any };
ninja = {
    name: 'yoshi',
    age: 45,
};
console.log(ninja);
ninja = {
    name: 123,
    age: '45',
};
console.log(ninja);
