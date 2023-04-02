const inquirer = require('inquirer');
const questions = require('./utils/questions');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log(`${fileName}.md has been generated.`)
        )};

function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        writeToFile(response.fileName, response);
    })
    .catch(err => {
        console.log(err)
    });
}

init();
