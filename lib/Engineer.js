// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name,id,email);
        this.github = github;
        const role = "Engineer";
    }
    get GitHub(){
        return this.github;
    }
}