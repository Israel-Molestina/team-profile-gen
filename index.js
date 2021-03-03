//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// array of questions for user input
const ManagerQuestions = [
    {
        type: 'input',
        message: "Please enter Manager's name",
        name: 'name',
        validate: function validateName(name){
            return name !== '';
        },
    },
    {
        type: 'input',
        message: "Please enter Manager's id",
        name: 'id',
        validate: function validateId(id){
            return id !== '';
        },
    },
    {
        type: 'input',
        message: "Please enter Manager's email",
        name: 'email',
        validate: function validateEmail(email){
            return email !== '';
        },
    },
    {
        type: 'input',
        message: "Please input Manager's office number",
        name: 'officeNum',
        validate: function validateOfficeNum(officeNum){
            return officeNum !== '';
        },
    },
    {
        type: 'confirm',
        message: "Would you like to add another team member?",
        name: 'newMember',
    },
    {
        type: 'list',
        message: "What role will this employee be fulfilling?",
        choices: [ "Engineer", "Intern" ],
        name: 'role',
        when: (answers) => answers.newMember === true,
    },
];

const engineerQuestions = [
    {
        type: 'input',
        message: "Please enter Engineer's name",
        name: 'name',
        validate: function validateName(name){
            return name !== '';
        },
    },
    {
        type: 'input',
        message: "Please enter Engineer's id",
        name: 'id',
        validate: function validateId(id){
            return id !== '';
        },
    },
    {
        type: 'input',
        message: "Please enter Engineer's email",
        name: 'email',
        validate: function validateEmail(email){
            return email !== '';
        },
    },
    {
        type: 'input',
        message: "Please input Engineer's GitHub",
        name: 'gitHub',
        validate: function validateGithub(gitHub){
            return gitHub !== '';
        },
    },
];

const internQuestions = [
    {
        type: 'input',
        message: "Please enter Intern's name",
        name: 'name',
        validate: function validateName(name){
            return name !== '';
        },
    },
    {
        type: 'input',
        message: "Please enter Intern's id",
        name: 'id',
        validate: function validateId(id){
            return id !== '';
        },
    },
    {
        type: 'input',
        message: "Please enter Intern's email",
        name: 'email',
        validate: function validateEmail(email){
            return email !== '';
        },
    },
    {
        type: 'input',
        message: "Please input Intern's school",
        name: 'school',
        validate: function validateSchool(school){
            return school !== '';
        },
    },
];

// creates a new constructor Manager class
function addManager() {
    inquirer.prompt([...ManagerQuestions])
    .then ((managerAnswers) => {
        new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber)
    })
    .then ((managerAnswers) => {
        if (managerAnswers.newMember === true) {
            addTeamMember(managerAnswers);
        }
    })
    .catch((err) => {
        console.log(err);
    })
};

// creates a new constructer class based on user imput
function addTeamMember(managerAnswers) {
    switch(managerAnswers.role) {
        case 'Engineer':
            addEngineer();

        case 'Intern':
            addIntern();
    }
};
// creates a new constructor Engineer class
function addEngineer() {
    inquirer.prompt([...engineerQuestions])
    .then ((engineerQuestions) => {
        new Engineer(engineerQuestions.name, engineerQuestions.id, engineerQuestions.email, engineerQuestions.github)
    })
    .catch((err) => {
        console.log(err);
    })
};

// creates a new constructor Intern class
function addIntern() {
    inquirer.prompt([...internQuestions])
    .then ((internQuestions) => {
        new Engineer(internQuestions.name, internQuestions.id, internQuestions.email, internQuestions.school)
    })
    .catch((err) => {
        console.log(err);
    })
}

addManager();

