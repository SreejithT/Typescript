var Student = /** @class */ (function () {
    function Student(name, age) {
        this.Name = name;
        this.Age = age;
        console.log("constructor invoked");
    }
    Student.prototype.display = function () {
        console.log("Name :", this.Name);
        console.log("Age :", this.Age);
    };
    return Student;
}());
var obj = new Student("Rose", 13); //default constructor- constructor with no arguments
var obj2 = new Student("Rini", 19);
console.log(obj);
obj.display();
