class Employee{
    static companycode:string="c1234"             //static variables-common to all objects
                                                 //static is a keyword 
    name:string
    salary:number
    age:number
    dob:Date
    static i:number=1
    j:number=1
    constructor(name:string,salary:number,age:number,dob:Date){
        this.name=name
        this.salary=salary
        this.age=age
        this.dob=dob

    }
    incSalary(amount:number):number{   //In typescript no need of keyword "function"
        this.salary+=amount
        return this.salary
    }
}

let employee1=new Employee("Sree",15000,22,new Date("1996-03-07"))
Employee.companycode="c12"
console.log(employee1)
let result=employee1.incSalary(5000)
console.log(result)
console.log(employee1 instanceof(Employee)) // to check whether an object is an instance of a class
// let emp2:Employee=new Employee("Raj")

function getData(...args:number[]){  //rest parameter-you can pass any number of values into it.. here args will become an array
// console.log(args)
 args.forEach((x)=>{
     console.log(x)
 })
}
getData(10,20,30,40,50,60,70)