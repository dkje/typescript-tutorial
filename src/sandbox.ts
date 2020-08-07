const logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
};

// 복잡한 타입형을 가지고 있을 경우
// const greet = (user: { name: string; uid: string | number }) => {
//     console.log(`${user.name} says hello`);
// };

type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const greet = (user: objWithName) => {
    console.log(`${user.name} says hello`);
};
