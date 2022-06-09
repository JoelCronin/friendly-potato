// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const markdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "What is the title of this README?",
        type: "input"
      },
      {
        name: "description",
        message: "How would you summarise what you did in this project?",
        type: "input" 
      },
      {
        name: "installation",
        message: "What do users have to do to install this application?",
        type: "input" 
      },
      {
        name: "Usage",
        message: "How do users use this application?",
        type: "input" 
      }, 
      {
        name: "contributing",
        message: "How can others contribute to this application?",
        type: "input" 
      }, 
      {
        name: "Tests",
        message: "Are there any tests users whould run?",
        type: "input" 
      }, 
      {
        name: "email",
        message: "What is your email address?",
        type: "input" 
      }, 
      {
        name: "GitHub",
        message: "What is your GitHub usename?",
        type: "input" 
      }, 
      {
        name: "licences",
        message: "What License is this covered by?",
        type: "list",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]
        },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  generateMarkdown()
}

// Function call to initialize app
init();



function generateMarkdown() {
  inquirer.prompt(questions)

  .then((answers) => {


    if(answers.licences === "GNU AGPLv3"){
      var icon = "![License](https://img.shields.io/badge/license-AGPLv3-green)\n"
  } else if(answers.licences === "GNU GPLv3") {
      var icon = "![License](https://img.shields.io/badge/license-GPLv3-green)\n"
  } else if(answers.licences === "GNU LGPLv3") {
      var icon = "![License](https://img.shields.io/badge/license-LGPLv3-green)\n"
  } else if(answers.licences === "Mozilla Public License 2.0") {
      var icon = "![License](https://img.shields.io/badge/license-Mozilla-green)\n"
  } else if(answers.licences === "Apache License 2.0") {
      var icon = "![License](https://img.shields.io/badge/license-Apache-green)\n"
  } else if(answers.licences === "MIT License") {
      var icon = "![License](https://img.shields.io/badge/license-MIT-green)\n"
  } else if(answers.licences === "Boost Software License 1.0") {
      var icon = "![License](https://img.shields.io/badge/license-Boost-green)\n"
  } else {
      var icon = "![License](https://img.shields.io/badge/license-Unlicense-green)\n"
  }

  fs.appendFile('README.md',`
  \n# ${answers.title}\n
  ${icon}\n
  ## Description\n
  ${answers.description}\n
  ## Table of Contents\n
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Contributing](#contributing)\n
  [Tests](#tests)\n
  [License](#license)\n
  [Questions](#questions)\n
  ## Installation\n
  ${answers.installation}\n
  ## Usage\n
  ${answers.Usage}\n
  ## contributing\n
  ${answers.contributing}\n
  ## Tests\n
  ${answers.Tests}\n
  ## License\n
  This application is covered under the following license: ${answers.licences}\n
  ## Questions\n
   You can view more information here: ${answers.GitHub}\n
  \n
  If you have any further questions please them to: ${answers.email}\n
  `, (err) =>
      err ? console.error(err) : console.log('Commit logged!'))
  })

}



