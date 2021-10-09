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
                licenseTxt="# Released under MIT License Copyright (c) 2013 Mark Otto. Copyright (c) 2017 Andrew Fong";
                licenseBadge="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                break;
            case 'APACHE 2.0':
                licenseTxt="Apache License Version 2.0, January 2004 "
                licenseBadge="[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                break;
            case 'GPL 3.0':
                licenseTxt="Copyright © 2007 Free Software Foundation, Inc.";
                licenseBadge="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                break;
            case 'BSD 3':
                licenseTxt= "BSD-3-Clause Copyright (c) . All rights reserved.";
                licenseBadge="[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
                break;
            case 'None':
                licenseTxt= 'None';
        };

        //fill string template literal with answers
        const txt = `# ${answers.title} \n
        ${license.badge} \n
        ## Description \n
        ${answers.description} \n
        
        ## Table of Contents \n
        -[Description](#description) \n
        - [Installation](#installation) \n
        - [Usage](#usage) \n
        - [Contribution](#credits) \n
        - [Tests](#tests) \n
        - [Questions](#questions) \n
        - [License](#license) \n
        
        ## Installation \n
        ${answers.installation} \n
        
        ${answers.installCode} \n
        ## Usage \n
        ${answers.usage} \n
        
        ## Contribution \n
        ${answers.contribution} \n
        
        ## Tests \n
        ${answers.tests} \n
        
        ## Questions \n
        ${answers.contact} \n
        ${answers.email} \n 
        [Gitub Repo](https://https://github.com/${answers.github}}) \n
        
        ## License \n
        ${licenseTxt} \n`;


        //output to new file
        fs.writeFile('generatedREADME.md', txt, (err) =>
            err ? console.error(err) : console.log('Success!'))
        ;
    });