var student = {
    name1:"Asif",
    fname:"Ahmed",
    age:40
}


function user(name1,fname,age){
    this.name1 = name1;
    this.fname = fname;
    this.age = age
}

class Employee{
    constructor(name,fname,age){
        this.name = name;
        this.fname = fname;
        this.age = age
    }
}



var user1 = new user("Asif","Ahmed",40)
var emp1 = new Employee("Imran","Jamal",41)

console.log(student)
console.log(user1)
console.log(emp1)