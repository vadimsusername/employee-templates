// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
var Employee = require("./Employee");
class Intern extends Employee{
    super(name,id,email,school){
        this.school = school;
        this.role = "Intern";
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;