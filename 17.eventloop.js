// event loop

//* call stack

//* web apis: timer , dom events, fetch, promise

//* task queue -> fifo

//* event loop



console.log("a");

console.log("b");

//const timer_id = setTimeout(() => {
  //  console.log("processing");
//}, 100000);

//console.log("c");

 


then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("finally");
})
const timer_id = setTimeout(() => {
    console.log("processing");
},2000);

console.log("c");