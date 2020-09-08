class Student{         // for declaring member variables we can't use let/var due to scope limitations
    Name:string;
    Age:number;
    constructor(name:string,age:number){
        this.Name=name
        this.Age=age
        console.log("constructor invoked")
    }
    display(){
        console.log("Name :",this.Name)
        console.log("Age :",this.Age)
    }
    

}
let obj=new Student("Rose",13) //default constructor- constructor with no arguments
let obj2=new Student("Rini",19)
console.log(obj)
obj.display()
