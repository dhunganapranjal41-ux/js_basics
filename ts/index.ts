type tUser = {
    readonly id: string;
    name: string;
    email?: string;
};
let user: tUser = {
    id: "1",
    name:"",
    email:"",

};

user.name = "abc";

type tuple =[string, string, number];

let usertuple: tuple = ["", "", 1];



type ID = string | Number;
let id; id = "1";
id="";
id=12;


type tUserwithpass = tUser & {
    password: string;
};

