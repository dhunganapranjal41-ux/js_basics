// ! class
class person {
   // name;
    //email;
   #password;
    //age;
      
     constructor(name, email, password, age) {
        this.name = name;
        this.email = email;
        this.#password = password;
        this.age = age;
     }
     getpassword() {
        return this.#password;
     }

     introduce(){
        console.log("this is person class");
     }
} 

const jhon = new person ("jhon", "jhon@gmail.com", "1235678","34" );
jhon.introduce();
//console.log(jhon);
//console.log(jhon.getpassword());
//const shyam = new person ("ram", "ram@gmail.com", "22344", 22);
//console.log(shyam);
//console.log(shyam.getpassword());


//class student {
     //name;
     //email;
     //#password;
     //faculty;
     //roll;
     //year;

       //  constructor(name, email, password, faculty, roll, year ){
         //  this.name = name;
          // this.email = email;
           //this.#password = password;
           //this.faculty = faculty;
           //this.roll = roll;
           //this.year = year;
        // }
        // getpassword () {
         //return this.#password;
         //}
         
//}


//const pranjal = new student("pranjal", "pranjal@gmail.com", "1235678","+2", "22", "2022" );
//console.log(pranjal);
//console.log(pranjal.getpassword());


class student extends person {

    constructor(name, email, age,  password, faculty, roll, year) {
        super(name, email, password, age);
        this.faculty = faculty;
        this.roll = roll;
        this.year = year;
    }
    introduce(){
        console.log("this is person class");

    }   
}

        const stu1 = new student(
            "student 1",
            " student1@gmail.com",
            " 22 ",
            "1234",
            "bcit",
            48,
            2017,
        );
console.log(stu1);
console.log(stu1.getpassword());
