//! array methods
//? push, pup, shift, unshift, at, includes, indexof, lastindexof...
 const numbers =[ 23, 4, 5, 6, 7, 8];
 const callback = (value, index, array) => {
 console.log(value, index, array);
 return value * 2;
 }; 
 let doubled = [];
 numbers.forEach((val, index) => {
 console.log(index);
 doubled.push(val * 2);
 });
 console.log(numbers, doubled);


 //*map

 //const doubled = numbers.map((val) => {
   // return val * 2;
 //});

 //console.log(numbers);
 //console.log(doubled);

 //*filter

 const odd = numbers.filter((val) => {
   if (val % 2 !== 0){
      return val;
   }
 });

 //console.log(odd);
 
// console.log(numbers);



//* REDUCE

const totalsum = numbers.reduce((acc, val) =>{
   return (acc += val);
});
 

console.log(totalsum);
console.log(numbers);


const cart = {
   user: {},
   items: [
      {  id: 1, product: { price: 1000}, quantity: 12},
      {  id: 2, product: { price: 100}, quantity:10},
      {  id: 3,  product: { price:1500}, quantity:13 },
   ]
}

const total = cart.items.reduce((sum, item) => {
   return sum + (item.product.price * item.quantity);
}, 0);

const item = cart.items.find(item => item.id === 2);

console.log(item);

console.log(total);




//*  find index

const res = numbers.find((val) => {
   if (val > 20) {
     return true;
   }
 });

 const res = numbers.find((val) => val > 20);
 numbers.findLast((val) => val > 20);

console.log(res);




//* find

const res = numbers.find ((val) => val >20);

console.log(res);

//* every / some 
console.log(numbers.every((val) => val > 2));
console.log(numbers.every((val) => val > 10));
console.log(numbers.some((val) => val > 10));

console.log(numbers);

 // short
 //console.log(numbers);
 //numbers.short((a, b) => {
   //return a - b;
 //});

 //console.log(numbers);