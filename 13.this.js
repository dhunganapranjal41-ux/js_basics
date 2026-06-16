// this -> {}
function a(){
    console.log(this);
}
//a();


//let user = {
  //  name : "pranjal dhungana",
   // email : "pranjal@gmail.com",
    //getName: function (){
     //   const a = () => {
       //     console.log(this);
     //   };
      //a();
    //},
//};

//user.getName();



//let user = {
  //  name : "pranjal dhungana",
    //email : "pranjal@gmail.com",
    //getName: function (){
      //  console.log(this.name);
            
        
      //},
//};

//const fn = user.getName;
//fn();





//class user{
  //  constructor(name, email) {
      //  this.name = name;
      //  this.email = email;
    //}
    //getname(){
    //     //    console.log(this.name);            
//  }
//}

//const u = new user("jhon", "jhon@gmail.com");


//!call, apply && bind


//* function object

//! call, apply 
function introduce(age, email){
  console.log("this is", this.name, age, email);
}

let user = {
  name: "pranjal dhungana",
  email : "pranjal@gmail.com",
};

introduce.call(user, 10, "pranjal@gmail.com");
introduce.call(user, 12, "pranjal@gmail.com");



//! bind
const fn = introduce.bind(user);
fn(12, "a@gmail.com");