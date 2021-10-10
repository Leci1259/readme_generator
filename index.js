// TODO: Include packages needed for this application
const fs =require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Type out install code',
        name: 'installCode',
    },
    {
        type: 'input',
        message: 'How are you using this?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who are your contributers?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Test Code?',
        name: 'tests',
    },
    {
        type: 'rawlist',
        message: 'What kind of license?',
        name: 'license',
        choices:["MIT",  "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: 'input',
        message: 'Github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'How should I reach you?',
        name: 'contact',
    },
    {
        type: 'input',
        message: 'What do you want to name this?',
        name: 'filename',
    },
];

// TODO: Create a function to write README file
function writeToFile(answers) {
    fs.writeFile(`${answers.filename}.md`, markdown(answers) , (err) =>
            err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        writeToFile(answers);
    });

};

// Function call to initialize app
init();
