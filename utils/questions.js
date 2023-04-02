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
    {
        name: 'license',
        message: 'What is the license type for this application?',
        type: 'list',
        choices: ['Academic Free License v3.0', 'Apache license 2.0', 'Artistic license 2.0', 'Boost Software License 1.0', 'Boost Software License 1.0', 'BSD 3-clause "New" or "Revised" license', 'BSD 3-clause Clear license', 'Creative Commons license family', 'Creative Commons Zero v1.0 Universal', 'Creative Commons Attribution 4.0', 'Creative Commons Attribution Share Alike 4.0', 'Do What The F*ck You Want To Public License', 'Educational Community License v2.0', 'Eclipse Public License 1.0', 'Eclipse Public License 2.0', 'European Union Public License 1.1', 'GNU Affero General Public License v3.0', 'GNU General Public License family', 'GNU General Public License v2.0', 'GNU General Public License v3.0', 'GNU Lesser General Public License family', 'GNU Lesser General Public License v2.1', 'GNU Lesser General Public License v3.0', 'ISC', 'LaTeX Project Public License v1.3c', 'Microsoft Public License', 'MIT', 'Mozilla Public License 2.0', 'Open Software License 3.0', 'PostgreSQL License', 'SIL Open Font License 1.1', 'University of Illinois/NCSA Open Source License', 'The Unlicense, zLib License'],
        validate: (answer) => {
            if (answer === "") {
                return console.log("\n Try again");
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
