const fileQuestions = require("./questions")
const inquirer = require("inquirer");
const fs = require('fs');

//If statment to decide what licence badge to use
function renderLicenseLink(answers) {
  if(answers.licences === "GNU AGPLv3"){
    var icon = "![License](https://img.shields.io/badge/license-AGPLv3-green)\n"
    return icon
} else if(answers.licences === "GNU GPLv3") {
    var icon = "![License](https://img.shields.io/badge/license-GPLv3-green)\n"
    return icon
} else if(answers.licences === "GNU LGPLv3") {
    var icon = "![License](https://img.shields.io/badge/license-LGPLv3-green)\n"
    return icon
} else if(answers.licences === "Mozilla Public License 2.0") {
    var icon = "![License](https://img.shields.io/badge/license-Mozilla-green)\n"
    return icon
} else if(answers.licences === "Apache License 2.0") {
    var icon = "![License](https://img.shields.io/badge/license-Apache-green)\n"
    return icon
} else if(answers.licences === "MIT License") {
    var icon = "![License](https://img.shields.io/badge/license-MIT-green)\n"
    return icon
} else if(answers.licences === "Boost Software License 1.0") {
    var icon = "![License](https://img.shields.io/badge/license-Boost-green)\n"
    return icon
} else if(answers.licences === "The Unlicense") {
  var icon = "![License](https://img.shields.io/badge/license-Unlicense-green)\n"
  return icon
}else {
    var icon = ""
    return icon
}
}


// TODO: Create a function to generate markdown for README
function generateMarkdown() {
  inquirer.prompt(fileQuestions.listed)
  .then((answers) => {

  // Uses answer to license section to get link to correct license badge
   var badge = renderLicenseLink(answers)
    
fs.writeFile('SAMPLE.md',`
# ${answers.title}\n
${badge}\n
## Description\n
${answers.description}\n
## Table of Contents\n
[Installation](#installation)\n
[Usage](#usage)\n
[Contributing](#contributing)\n
[Tests](#tests)\n
[License](#license)\n
[Questions](#questions)\n
## Installation\n
${answers.installation}\n
## Usage\n
${answers.Usage}\n
## Contributing\n
${answers.contributing}\n
## Tests\n
${answers.Tests}\n
## License\n
This application is covered under the following license: ${answers.licences}\n
## Questions\n
My GitHUb username is: ${answers.GitHub} which can be accessed by [clicking here](https://github.com/JoelCronin) \n
\n
If you have any further questions please send them to: ${answers.email}\n
`, (err) =>
err ? console.error(err) : console.log('Commit logged!'))
      }
      )
}


module.exports = {
  generateMarkdown,
  renderLicenseLink,
}
