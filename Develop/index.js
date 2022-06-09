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

