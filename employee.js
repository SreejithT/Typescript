var Employee = /** @class */ (function () {
    function Employee(name, salary, age, dob) {
        this.j = 1;
        this.name = name;
        this.salary = salary;
        this.age = age;
        this.dob = dob;
    }
    Employee.prototype.incSalary = function (amount) {
        this.salary += amount;
        return this.salary;
    };
    Employee.companycode = "c1234"; //static variables-common to all objects
    Employee.i = 1;
    return Employee;
}());
var employee1 = new Employee("Sree", 15000, 22, new Date("1996-03-07"));
Employee.companycode = "c12";
console.log(employee1);
var result = employee1.incSalary(5000);
console.log(result);
console.log(employee1 instanceof (Employee)); // to check whether an object is an instance of a class
// let emp2:Employee=new Employee("Raj")
function getData() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // console.log(args)
    args.forEach(function (x) {
        console.log(x);
    });
}
getData(10, 20, 30, 40, 50, 60, 70);
