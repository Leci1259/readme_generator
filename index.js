//grab packages needed for application
const fs =require('fs');
const inquirer = require('inquirer');

//use inquirer
inquirer
    //ask questions
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
            name: 'License',
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
    ])
    //use answers
    .then(function(answers) {

        //fill string template literal with answers
        const txt = ``;

        //output to new file
        fs.writeFile('README.md', txt, (err) =>
            err ? console.error(err) : console.log('Success!'))
        ;
    });