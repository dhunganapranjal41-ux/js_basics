//! Objects
// let usr_name = 'John'
// let user_email = ''

// object contructor
// const obj = new Object({});

// object literal {}

const user = {
  name: "John",
  email: "john@gmail.com",
  address: {
    city: "kathmandu",
    country: "npl",
  },
};

//! accessing/reading object properties
//* dot notation
// console.log(user.name);
const user_name = user.name;
// console.log(user_name);
// console.log(user.age);
// let name = "";
// console.log(user.full_name);
//* bracket notation []
// console.log(user["email"]); //

// console.log(user["full name"]);

let key = "email";
// console.log(user.key); //
console.log(user[key]); //  user['email']

key = "name";
console.log(user[key]); //  user['name']

//! adding new properties

user.id = "1";

const new_key = "age";
const new_val = 28;
user[new_key] = new_val; //

//! modify object properties
user.age = 27;
console.log(user);

// user = {};

// const x = 12;
// x = 23;

//! destructuring
// let name = user.name;
// let email = user.email;
// let id = user.id;

// let user2 = {
//   name: "Alice",
//   email: "Alice@gmail.com",
//   id: "2",
//   age: 25,
// };

// let { name, email, age, id } = user;
// let { name: user2_name, email: user2_email } = user2;

// console.log(name, email); //
// console.log(user2_name, user2_email);

//! rest op ...

// let { age, id, email, ...x } = user;
// console.log(x);

//! spread op ...

let o1 = {
  a: "a",
  b: "b",
};

let o2 = { ...o1, c: "c" };

// o2.a = "a2";

// console.log(o1, o2);
// console.log(user.address.city); //
// // bracket
// console.log(user["address"]["city"]);

const user1 = {
  name: "John",
  email: "john@gmail.com",
  address: {
    city: "kathmandu",
    country: "npl",
  },
};

const user2 = {
  name: "John",
  email: "john@gmail.com",
};

//! optional chaining [?.]
console.log(user1.address.city);
console.log(user2.address?.city);
//<p>{user2.address?.city}</p>

 //if (user2.address) {
   // //if()
  //console.log(user2.address.city);
 //}
 //console.log(undefined.city)

//! null safty ??

//console.log(uuser2.address?.city ?? "city not found");