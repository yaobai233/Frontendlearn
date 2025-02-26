//1. const 和 let
//2. 字符串模板
const str1 = 'hi' + 'world';
const str2 = `hi${str1}`;
const str3 = `hi${str1}

这也是字符串内容`;
console.log(str2); // hihiworld
console.log(str3); 

// 3. 解构赋值
const {username, age:userAge, ...otherInfo} = {
    username: 'yaobai',
    age: 18,
    gender: 'male',
    category: 'human'
  }
  console.log(username, userAge)
  console.log(otherInfo)

// 4. 数组和对象的扩展
// 4.1扩展运算符
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2, 7, 8, 9];
console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const obj1 = {
    a: 1
}
const obj2 = {
    b: 2
}
const obj3 = {
    c: 3,
    ...obj1,
    ...obj2,
}
console.log(obj3);
// 4.2 数组方法
Array.from('hello') // ['h', 'e', 'l', 'l', 'o'] 

function fn () {
    console.log(arguments);
    Array.from(arguments).forEach(item => console.log(item));
}

fn(1, 2, 3, 4);

// 4.3 对象方法
const objA = {
    name : 'yaobai',
    age: 18
}

// const objB = Object.assign({}, objA)
// objB.name = 'baiyao'

const objB = {
    gender: 'male',
}
const objC = Object.assign({}, objA, objB)
console.log(objA, objB)
console.log(objC)

class A {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// 5. 箭头函数
// 传统函数
const getSum = function(a, b) { return a + b; };

// 箭头函数
const getSum1 = n => n + 3;
const getSum2 = (a, b) => a + b;
const getSum3 = (a, b, ...other) => console.log(a, b, other);
console.log(getSum3(18, 20, 100, 200, 300))

const getSum4 = arr => {
    let sum = 0
    arr.forEach(item => sum += item)
    return sum
}
console.log(getSum4([1, 2, 3, 4]))