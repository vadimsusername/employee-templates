// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee{
    super(name,id,email,school){
        this.school = school;
        const role = "Intern";
    }
    getSchool(){
        return this.school;
    }
}