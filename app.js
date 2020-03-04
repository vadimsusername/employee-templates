const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
/*const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
​*/
const render = require("./lib/htmlRenderer");

//const promptJSON = "[]"
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
/*
const managerPrompt = [
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
    },
    {
        type: "input",
        message: "Enter office number: ",
        name: "office"
    }
];


const engineerPrompt = [
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
    },
    {
        type: "input",
        message: "Enter GitHub username: ",
        name: "github"
    }
];

const internPrompt = [
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
    },
    {
        type: "input",
        message: "Enter university: ",
        name: "school"
    }
];
*/
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

    inquirer.prompt(rolePrompt).then(answers => {
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
                console.log("Switch default case");
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
       
        switch(lastProperty){
            case "office":
                console.log("Manager role answers");
                break;
            case "github":
                console.log("Engineer role answers");
               break;
            case "school":
                console.log("Intern role answers");
                break;
            default:
                console.log("Second switch default case");
        }
      
    });
  
/*
    empObj = new Manager(answers.name,answers.id,answers.email,answers.office);
    console.log(empObj);
    employees.push(empObj);
    */