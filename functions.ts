//Normal functions 

function userDetails(name:string , age:number , isloggedIn :boolean){
console.log("Name: "+name);
console.log("Age: "+age);
console.log("Login Status: "+isloggedIn);
}
userDetails("Tushar",22,true);


//Arrow Function

let userDetails2 = (name:String,userId:number) =>{
  
    console.log(name,userId);

}

userDetails2("tushar",22);