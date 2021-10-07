//grab files
const fs =require('fs');
const inquirer = require('inquirer');

//ask questions
inquirer
    .prompt([
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
            message: 'Type out Installation Instructions',
            name: 'installation',
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
            message: 'Tests?',
            name: 'tests',
        },
        {
            type: 'rawlist',
            message: 'What kind of license?',
            name: 'License',
            choices:[],
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
    ])