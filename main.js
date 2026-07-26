const students = [
    
    {
        id:1,
        name : "tushar",
        age : 23
    },
    {
        id:2,
        name : "tanisha",
        age : 18
    },
    {
        id:1,
        name : "ritika",
        age : 15
    }
]
students.push({
    id:4,
    name:"shourya",
    age:12
})
students.forEach(student=>{
    console.log(student.name);
})

const names = students.map(s=>s.name);
console.log(names);

