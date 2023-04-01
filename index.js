const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        name: 'license'
        message: 'Select a license type: '
        type: 'list'
        choices: ''
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid title for your project");
            }
            return true;
        }
    },
    { 
        name: 'title'
        message: 'What is the title?'
        type: 'input'
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid title for your project");
            }
            return true;
        }
    },
    {
        name: 'description'
        message: 'Describe the application:'
        type: 'input'
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid title for your project");
            }
            return true;
        }
    },
    {
        name: 'install'
        message: 'How do you install the application?'
        type: 'input'
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid title for your project");
            }
            return true;
        }
    },
    {
        name: 'usage'
        message: "How is the application used?"
        type: 'input'
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid title for your project");
            }
            return true;
        }
    },
    {
        name: 'contributing'
        message: 'How can others contribute?'
        type: 'input'
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid title for your project");
            }
            return true;
        }
    },
    {
        name: 'tests'
        message: 'How can you test the application?'
        type: 'input'
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid title for your project");
            }
            return true;
        }
    },
    {
        name: 'username'
        message: 'What is your GitHub username?'
        type: 'input'
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid title for your project");
            }
            return true;
        }
    },
    {
        name: 'email'
        message: 'What is your email?'
        type: 'input'
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid title for your project");
            }
            return true;
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
