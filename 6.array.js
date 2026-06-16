//! Array
// []
// numbered index -> 0th index

//! new keyword
// const arr = new Array(8, 4);

//! array literal []
const numbers = [1, 2, 34, 5, 6];

//* reading elements
// array_name[index]
const ele = numbers[0];
console.log(ele);
console.log(numbers[4]);

//* adding new element
//! form end
//? push
// arr_name.push(item1,item2,......)  -> return length
// const res = numbers.push(12, 45, 3, 67);
// console.log(res);

//! form start
//? unshift()
// arr_name.unshift(item1 , item2 ,...)  -> return length
// numbers.unshift(100, 200);

//* remove element
//! from end
// arr_name.pop()  -> removed element
// console.log(numbers);

// const res = numbers.pop();

// console.log(res);

//! form start
// shift  -> return removed element
// array.shift()
// console.log(numbers);

// numbers.shift();

//! length
// array_name.length
console.log(numbers.length);

numbers.push(54);
numbers.push(4);
console.log(numbers[numbers.length - 1]); // num[7-1]

//* search
//! arr.includes(el)  -> return boolean
console.log(numbers.includes(2));
console.log(numbers.includes(20));

//! arr.indexOf(el) -> return index
numbers.push(34);
console.log(numbers.indexOf(34)); // 2
console.log(numbers.indexOf(100));

console.log(numbers.lastIndexOf(34)); // 7

//! join
console.log(numbers.join(","));
console.log(numbers.join("-"));
// console.log(numbers.);

//! function