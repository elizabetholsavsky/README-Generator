const questions = [
    {
        name: 'fileName',
        message: 'What would you like to name this file?',
        type: 'input',
        validate: (answer) => {
            if (answer === "") {
                return console.log("\n Try again");
            }
            return true;
        }
    },
    // {
    //     name: 'license',
    //     message: 'What is the license type for this application?',
    //     type: 'list',
    //     choices: '',
    //     validate: (answer) => {
    //         if (answer === "") {
    //             return console.log("Select a license type: ");
    //         }
    //         return true;
    //     }
    // },
    {
        name: 'description',
        message: 'What does this application do?',
        type: 'input',
        validate: (answer) => {
            if (answer === "") {
                return console.log("\n Try again");
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
                return console.log("\n Try again");
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
                return console.log("\n Try again");
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
                return console.log("\n Try again");
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
                return console.log("\n Try again");
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
                return console.log("\n Try again");
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
                return console.log("\n Try again");
            }
            return true;
        }
    },
];

module.exports = questions;
