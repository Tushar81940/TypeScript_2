
//Definiton => An array in TypeScript is a typed list of elements where all elements must follow the same specified data type.

//Syntax : let arrayName: dataType[] = [value1, value2, value3];


//Basic Array in TS

let number:number[] = [1,2,3,4];

let names: string[] = ["Tushar", "Aman", "Ravi"];

let flags: boolean[] = [true, false, true];

// An alternate way

let marks: Array<number> = [85, 90, 78];


type Userdata = {
    name:string;
    age:number;
}

const myUserData :Userdata[]=[];

myUserData.push({name:"Tushar",age:22});