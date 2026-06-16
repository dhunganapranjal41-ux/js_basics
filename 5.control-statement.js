//! truthy & falsy values

//* falsy : false , null, undefined , 0 ,-0 ,'' ,NaN
//console.log(Boolean(null));
//console.log(Boolean(-0));
//console.log(Boolean(30));
//console.log(Boolean(0));
//console.log(Boolean(10));

//let a = 10; 
//if (a) {
  //  console.log("Hello");

//}

//! control flow


//! control statements
//if

//if else

  //  let age = 17;
    //if (age >=18){
      //  console.log("can vote");
    //}else{
        //console.log("can not vote");
    //}

    //! elsi-if ladder
    // if age >= 60 -> major
    // if age > 18 < 60 -> adult
    // if age < 18  -> minor

    //if (age >= 60) {
     //   console.log("Major"); 
    //} else if (age >=18) {
      //  console.log("Adult");
     //}else {
       // console.log("Minor");
    //}
 
//todo: switch-case
//todo: ternary op. ( ?: )
// condition ? exp_1 : exp_2
//let age = 17;
//let res = age >= 18 ? "can vote" : "can not vote";
//let result = age >=60 ? "major" : age >=18 ? "adult" : "Minor"; 
//console.log(res);
//console.log(result);


//! loops
// {

// }

//! do-while
//do{
// } while (condition);

let i = 0;
do {
    console.log(i);
    // i = i = 1;
    i++;
} while (i <=10);

//! while
 console.log("while")

let j = 11;
while(j <= 10) {
    console.log(j);
    j++;
}

//! for
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//! for in

//! for of

//* jump/branching statements
//? break
for (let i = 1; i <= 10; i++){
    if (i===5){
        break;
    }
    console.log(i);
}
//? continue
for (let i = 1; i <= 10; i++) {
    if (i===5){
        continue;
    }
    console.log(i);
}

//* print odd number betn 1-1o
    for (let i = 1; i<=10; i++){
        if (i % 2 !==0){
            console.log(i);
        }
    }
//* print even number betn 1-1o    
     for (let i = 11; i<20; i++){
        if (i % 12 !==0){
            console.log(i);
        }
     }