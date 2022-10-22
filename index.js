const inquirer = require('inquirer');
const fs = require('fs');

const managerPrompts = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "checkbox",
        message: "Select a license for your project:",
        choices: ['MIT', 'Apache', 'BSD', 'None'],
        name: "license",
    },
];

const employeePrompts = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "checkbox",
        message: "Select a license for your project:",
        choices: ['MIT', 'Apache', 'BSD', 'None'],
        name: "license",
    },
];