const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const renderEngineer = require("./lib/Engineer");
const renderIntern = require("./lib/Intern");
const renderManager = require("./lib/Manager");

const teamMember = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function init() {
  inquirer
    .prompt([
      { type: "input", name: "name", message: "What is the manager's name?" },
      {
        type: "input",
        name: "id",
        message: "What is the manager's id?",
      },
      { type: "input", name: "email", message: "What is the manager's email?" },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
      },
    ])
    .then((answers) => {
      let { name, id, email, officeNumber } = answers;
      let manager = new Manager(name, id, email, officeNumber);
      console.log(id);
      teamMember.push(manager);

      buildTeam();
    });
}
function buildTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addMember",
        message: "Would you like to add another team member?",
        choices: ["Engineer", "Intern", "Finish"],
      },
    ])
    .then((answers) => {
      nextMember = answers.addMember;

      switch (nextMember) {
        case "Engineer":
          getEngineer();
          break;
        case "Intern":
          getIntern();
          break;
        case "Finish":
          renderTeam();
      }
    });
}

function getEngineer() {
  inquirer
    .prompt([
      { type: "input", name: "name", message: "What is the engineer's name?" },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?",
      },
    ])
    .then((answers) => {
      let { name, id, email, github } = answers;
      let engineer = new Engineer(name, id, email, github);
      teamMember.push(engineer);

      buildTeam();
    });
}

function getIntern() {
  inquirer
    .prompt([
      { type: "input", name: "name", message: "What is the intern's name?" },
      {
        type: "input",
        name: "id",
        message: "What is the intern's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "school",
        message: "What school does the intern attend?",
      },
    ])
    .then((answers) => {
      let { name, id, email, school } = answers;
      let intern = new Intern(name, id, email, school);
      teamMember.push(intern);

      buildTeam();
    });
}

function renderTeam() {
  fs.writeFileSync(outputPath, render(teamMember));
}

init();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
