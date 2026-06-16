//console.log(x);
var x = 10;
///console.log(x);


hoist();

  function hoist(){
    console.log("hoist");
  }
console.log(a);
//a();  //TypeError: a is not a function
  
 var a = function() {
    console.log("a");
  };

//  b();
//  var b = () => {
//  console.log("b");
//  };



let c = 10;

console.log(c);
// temporal dead zone   TDZ //


 //diffrence betwn let const var
 //* decleration
 //* scope
 //* hoisting



//! memory creating phase
// memoey allocation
//  {x:undefined, hoist:(){}}





//! execution phase
// execute
// memory initialize
//{x:10,, hoist : (){}}

//a();
// var mern = () => {
  //  console.log("mern");
 //};

 //mern();


// console.log(f);
//  let f= 12
//   console.log(f);

             



  