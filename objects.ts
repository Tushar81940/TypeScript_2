//Basic type of object

let user2: {
  name: string;
  age: number;
  isStudent: boolean;
};

user2 = {
  name: "Tushar",
  age: 22,
  isStudent: true
};

console.log(user2.name);

//Inline Objects


const product : {id:number;title:string;price:number}={
    id:1,
    title:"Laptop",
    price:55000

};

console.log(product.price);


//Using type 


type User = {
  name: string;
  age: number;
  email: string;
};

const user1: User = {
  name: "Tushar",
  age: 22,
  email: "tushar@gmail.com"
};

//Usng Interface 

interface Student {
    name:string;
    age:number;
}

const s1:Student = {
    name:"Tushar",
    age:32
}

//Optional Properties 


interface Users {
  name: string;
  age?: number;
}

const u1: Users = { name: "Tushar" };

//readonly Properties


interface User3 {
  readonly id: number;
  name: string;
}

const user3: User3 = {
  id: 1,
  name: "Tushar"
};

// user.id = 2 ❌ Error



//Nested Objects 

interface Address {
    city:string;
    pincode:number;
}

interface User4{
    name:string;
    address:Address;
}

const u4:User4={
     name:"Tushar",
     address:{
        city:"kashipur",
        pincode:244713
     }

}

//Array of Objects 

interface Student2{
    id:number;
    name:string;
}

const Students : Student2[]=[
    {id:1,name:"Tushar"},
    {id:2,name:"Harshdeep"}
];


