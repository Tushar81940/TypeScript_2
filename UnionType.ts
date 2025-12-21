let score:number|string = 33;
score = 44;
score = "Fourty-Four";     //Both the methods are correct because of the union types 



// Union Type (with Object Types)


type Myuser = {
    name :string;
    id:number;
}

type Admin = {
    username :string;
    id:number;
}

let mydata : Myuser | Admin = {name:"Tushar",id:22}

mydata = {username:"Tushar",id:33}

function getDBid(id:string|number){
    console.log(`Your DB id is : ${id}`);  
}

getDBid(4);
getDBid("Five");

