// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;
    case "APACHE 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
      break;
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      break;
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
      break;
    case "None":
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
      break;
    case "APACHE 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL 3.0":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD 3":
      return "(https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "None":
      return "";
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `
## License
Released under MIT License Copyright (c) 2013 Mark Otto. Copyright (c) 2017 Andrew Fong 
[${license}]${renderLicenseLink(license)}`;
      break;
    case "APACHE 2.0":
      return `
## License
Apache License Version 2.0, January 2004 
[${license}]${renderLicenseLink(license)}`;
      break;
    case "GPL 3.0":
      return `
## License
Copyright © 2007 Free Software Foundation, Inc.
[${license}]${renderLicenseLink(license)}`;
      break;
    case "BSD 3":
      return `
## License
BSD-3-Clause Copyright (c) . All rights
 [${license}]${renderLicenseLink(license)}`;
      break;
    case "None":
      return "";
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} 
  
  ${renderLicenseBadge(answers.license)}${renderLicenseLink(answers.license)} 
 
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
  
  
  ${renderLicenseSection(answers.license)}`
;
}

module.exports = generateMarkdown;
