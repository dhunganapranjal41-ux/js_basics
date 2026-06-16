//! async

// console.log("start");
// console.log("processing");
// console.log("end");

console.log("start");
//* setTimeout
// setTimeout(callback,timer,...args)

const timer_id = setTimeout(
  (name, num) => {
    console.log("processing", num, name);
  },
  2000,
  "john",
  23,
);

// clearTimeout(timer_id);

// console.log(timer_id._timerArgs);
// console.log(timer_id._idleNext);\

//! setInterval()

let i = 0;
const id = setInterval(() => {
  console.log(i);
  if (i === 10) {
    clearInterval(id);
  }
  i++;
}, 1000);
console.log("end");





//callback function

 