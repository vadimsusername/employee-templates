const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const inquirer = require("inquirer");

const employeePrompt = [
    {
        type: "input",
        message: "Enter name: ",
        name: "name"
    },
    {
        type: "input",
        message: "Enter ID number: ",
        name: "id"
    },
    {
        type: "input",
        message: "Enter email: ",
        name: "email"
    }
];
const employeePromptJSON = JSON.stringify(employeePrompt);

var managerPrompt = JSON.parse(employeePromptJSON);
managerPrompt.push({type:"input",message:"Enter office number: ",name:"office"});
//console.log(managerPrompt);
//console.log(employeePrompt);
var engineerPrompt = JSON.parse(employeePromptJSON);
engineerPrompt.push({type:"input",message:"Enter GitHub username: ",name:"github"});
//console.log(engineerPrompt);
var internPrompt = JSON.parse(employeePromptJSON);
internPrompt.push({type:"input",message:"Enter interns university: ",name:"school"});
//console.log(internPrompt);

const rolePrompt = [
    {
        type: "list",
        message: "Choose the type of employee: ",
        choices: ["Manager","Engineer","Intern"],
        name: "role"

    }
];
const addEmpPrompt = [
    {
        type: "confirm",
        message: "Do you want to add another employee?",
        name:"addEmployee"
    }
]

var employees = [];
var addAnother = true;

(async ()=> {
  do{
    await inquirer.prompt(rolePrompt).then(answers => {
          var role = answers.role;
          console.log(role);
        
          switch(role){
            case "Manager":
                return inquirer.prompt(managerPrompt);
                break;
            case "Engineer":
                return inquirer.prompt(engineerPrompt);
                break;
            case "Intern":
                return inquirer.prompt(internPrompt);
                break;
            default:
                console.log("Error choosing role");
          }
      }).then(answers => {
        console.log("In second prompt answers");
        /*
        console.log(answers);
        var properties = Object.keys(answers);
        console.log(properties);
        
        console.log(ans4);
        */
       var empObj;
       var lastProperty = Object.keys(answers)[3];
       var employee;
        switch(lastProperty){
            case "office":
                console.log("Manager role answers");
                employee = new Manager(answers.name,answers.id,answers.email,answers.office);
                employees.push(employee);
                break;
            case "github":
                console.log("Engineer role answers");
                employee = new Engineer(answers.name,answers.id,answers.email,answers.github);
                employees.push(employee);
               break;
            case "school":
                console.log("Intern role answers");
                employee = new Intern(answers.name,answers.id,answers.email,answers.school);
                employees.push(employee);
                break;
            default:
                console.log("Error getting answers");
        }
        return inquirer.prompt(addEmpPrompt);
    }).then(answer => {
        addAnother = answer.addEmployee;
    });
  }while(addAnother);
  console.log(employees);
  var roster = render(employees);
  console.log(roster)
})();

