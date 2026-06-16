// functions_name

//function greet(){
    //console.log("Hello world");
//}
//greet();

//* function with input
//function greet(name){
   // console.log("Hello", name);
//}
//greet("jhon");
//greet("dhyam");
//greet();

//* default parameter

//function greet(name = "guest", age){
    //console.log("Hello", name, age);
//}
//greet("jhon", 27);
//greet(30, "BOB");
//greet();

//function add(a = 0, b = 0) {
    //console.log(a + b);
//} 
//add(12, 3);
//add(10);


//! functions with written type

//function add( a = 0, b = 0) {
    //let sum = a + b;
  //  return sum;
//}

//let result = add(12, 3);
//console.log(result);            
//let result = add(10);
//console.log(result);

//isEven(a) return true or false

//! function expression


const sub = function (a, b) {
    return a-b ;

};
//console.log(sub(10,5));
 

// is odd
const isodd = function(num){
    if (num % 2 !== 0){
        return true;
    }
    return false;
}

//console.log(isodd(2));

//! arrow function

const multiply = (a, b) => a * b

//console.log(multiply(12, 5));



//* callback functions
const parent = function (callback) {
    console.log(callback);
    console.log("Parent");
    callback(10);
};

 const child = function (a){
   console.log("child", a);
 };
 parent(child);

 parent((a) =>{
 console.log("child", a);
 return 100;
 });

//* higher order function;
//* FUNCTION THAT TAKES ANOTHER FUNCTUIN AS ARGUMENT //


function greet(name) {
    return ("hello", "ram"); 
}
function processuser(callback){
    //console.log(callback("hello", "ram"));
}
//processuser(greet);
 const hof = () => {
    console.log("hof");
    const child = () => {
        console.log("childern");
    };
    return child;
 };

 const childern = hof();
 childern();
 console.log(childern);

 // arrow
 // object
 // function
  const outer = (num1) => {
    const inner = (num2) =>{
        return num1 + num2;
    ;}
  return inner;
  };
   
  const add5 = outer(5);
  const add10 = outer(10);

  //console.log(add5(10));
  //console.log(add5(15));

  //**** const outer =(num1) => (num2) => num1 + num2 //****
//todo: IIFE;
//IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs 
// immediately after it is created