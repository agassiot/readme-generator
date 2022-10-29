import inquirer from "inquirer";
import fs from "fs"



inquirer

    .prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of the project?',
        },
        {
            type: 'input',
            name: 'TOC',
            message: 'Generate a table of contents? (leave blank for no)',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your application.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install this app?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is this app for?',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List all contributors and collaborators',
        },
        {
            type: 'list',
            choices: [
                {
                    key: "Apache 2.0",
                    value: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
                },

                {
                    key: "IPL 1.0",
                    value: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
                },
                {
                    key: "MIT",
                    value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
                },
                {
                    key: "ISC",
                    value: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
                },
            ],
            name: 'license',
            message: 'Put license information here'
        },
        {
            type: 'input',
            name: 'features',
            message: 'Describe any special or unique features of this application here.',
        },
        {
            type: 'input',
            name: 'struggles',
            message: 'Talk about any struggles you have had getting this application to work.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Leave a link to your Github page here.',
        },
        {
            type: 'input',
            name: 'githubRepo',
            message: 'Leave a link to this projects Github Repository',
        },
        {
            type: 'input',
            name: 'deployed',
            message: 'Leave a link to the live site.',
        },
    ])
    .then((answers) => {
        const readmeContent = genMD(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README')
        );
    })

function genMD({ projectName, TOC, description, installation, usage, credits, license, features, struggles, github, githubRepo, deployed }) {
 return (`  ## ${projectName}

            ## ${genTOC(TOC)}

            ## Description
            ${description}
            ### Installation
            ${installation}
            ### Use
            ${usage}
            ### Credits
            ${credits}
            ### License
            ${license}
            ### Features
            ${features}
            #### Struggles
            ${struggles}
            ### Links
            Github Page ${github}
            Github Repository ${githubRepo}
            Live Link ${deployed}`);
}

function genTOC(answer){
    if(answer){
        return(`Table of Contents
            * [description](#description)
            * [installation](#installation)
            * [use](#use)
            * [credits](#credits)
            * [license](#license)
            * [features](#features)
            * [struggles](#struggles)
            * [links](#links)`)
    }
    else{return('###########################')}
}

