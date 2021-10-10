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
    ])
    //use answers
    .then(function(answers) {
        var licenseTxt;
        var licenseBadge;

        //check for license type
        switch (answers.license) {
            case 'MIT':
                licenseTxt="Released under MIT License Copyright (c) 2013 Mark Otto. Copyright (c) 2017 Andrew Fong";
                licenseBadge="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
                break;
            case 'APACHE 2.0':
                licenseTxt="Apache License Version 2.0, January 2004 "
                licenseBadge="[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"
                break;
            case 'GPL 3.0':
                licenseTxt="Copyright © 2007 Free Software Foundation, Inc.";
                licenseBadge="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
                break;
            case 'BSD 3':
                licenseTxt= "BSD-3-Clause Copyright (c) . All rights reserved.";
                licenseBadge="[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
                break;
            case 'None':
                licenseTxt= 'None';
        };

        //fill string template literal with answers
        const txt = `# ${answers.title} 
        ${licenseBadge} 
       
        ## Description 

        ${answers.description} 
        
        ## Table of Contents 

        - [Description](#description) 

        - [Installation](#installation) 

        - [Usage](#usage) 

        - [Contribution](#credits) 

        - [Tests](#tests) 

        - [Questions](#questions) 

        - [License](#license) 

        
        ## Installation

        Install Node.js. Run the following command in the terminal:
        
        ${answers.installCode}

        ## Usage

        ${answers.usage}
        
        ## Contribution 

        ${answers.contribution}
        
        ## Tests 

        ${answers.tests}
        
        ## Questions

        ${answers.contact}
        Email:  ${answers.email}
        Github: [Github Repo](https://github.com/${answers.github})
        
        
        ## License

        ${licenseTxt}`;


        //output to new file
        fs.writeFile('generatedREADME.md', txt, (err) =>
            err ? console.error(err) : console.log('Success!'))
        ;
    });