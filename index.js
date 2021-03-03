//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')

// array of questions for user input
const questions = [
    {
        type: 'list',
        message: "What role will this employee be fulfilling?",
        choices: [ "Manager", "Engineer", "Intern" ],
        name: 'role',
    },
    {
        type: 'input',
        message: "Please enter team members name",
        name: 'name',
        validate: function validateName(name){
            return name !== '';
        },
    },
    {
        type: 'input',
        message: "Please enter team members id",
        name: 'id',
        validate: function validateId(id){
            return id !== '';
        },
    },
    {
        type: 'input',
        message: "Please enter team members email",
        name: 'email',
        validate: function validateEmail(email){
            return email !== '';
        },
    },
    {
        type: 'input',
        message: "Please input Manager's office number",
        name: 'officeNum',
        when: (answers) => answers.role === Manager,
        validate: function validateOfficeNum(officeNum){
            return officeNum !== '';
        },
    },
    {
        type: 'input',
        message: "Please input Engineer's GitHub",
        name: 'gitHub',
        when: (answers) => answers.role === Engineer,
        validate: function validateGithub(gitHub){
            return gitHub !== '';
        },
    },
    {
        type: 'input',
        message: "Please input Intern's school",
        name: 'school',
        when: (answers) => answers.role === Intern,
        validate: function validateSchool(school){
            return school !== '';
        },
    },
];

function init() {
    inquirer.prompt([...questions])
    .then ((answers) => {

    })
}

init();