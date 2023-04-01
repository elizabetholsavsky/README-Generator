const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        name: 'license',
        message: 'What is the license type for this application?',
        type: 'list',
        choices: '',
        validate: (answer) => {
            if (answer === "") {
                return console.log("Select a license type: ");
            }
            return true;
        }
    },
    { 
        name: 'title',
        message: 'What is the title of this application?',
        type: 'input',
        validate: (answer) => {
            if (answer === "") {
                return console.log("What is the title?");
            }
            return true;
        }
    },
    {
        name: 'description',
        message: 'What does this application do?',
        type: 'input',
        validate: (answer) => {
            if (answer === "") {
                return console.log("Describe the application:");
            }
            return true;
        }
    },
    {
        name: 'install',
        message: 'How do you install this application?',
        type: 'input',
        validate: (answer) => {
            if (answer === "") {
                return console.log("How do you install the application?");
            }
            return true;
        }
    },
    {
        name: 'usage',
        message: "How is this application used?",
        type: 'input',
        validate: (answer) => {
            if (answer === "") {
                return console.log("How is the application used?");
            }
            return true;
        }
    },
    {
        name: 'contributing',
        message: 'How can others contribute to this application?',
        type: 'input',
        validate: (answer) => {
            if (answer === "") {
                return console.log("How can others contribute?");
            }
            return true;
        }
    },
    {
        name: 'tests',
        message: 'How can you test this application?',
        type: 'input',
        validate: (answer) => {
            if (answer === "") {
                return console.log("How can you test the application?");
            }
            return true;
        }
    },
    {
        name: 'username',
        message: 'What is your GitHub username?',
        type: 'input',
        validate: (answer) => {
            if (answer === "") {
                return console.log("What is your GitHub username?");
            }
            return true;
        }
    },
    {
        name: 'email',
        message: 'What is your email?',
        type: 'input',
        validate: (answer) => {
            if (answer === "") {
                return console.log("What is your email?");
            }
            return true;
        }
    },
    {
        name: 'fileName',
        message: 'What would you like to name this file?',
        type: 'input',
        validate: (answer) => {
            if (answer === "") {
                return console.log("What is your email?");
            }
            return true;
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data,
    (err) => err ? console.log(err) : console.log(`${fileName}.md has been generated.`))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
