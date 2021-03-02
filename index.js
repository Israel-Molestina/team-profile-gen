//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')

// init new employee
const employee = new Employee();

// start prompts for new employee
employee.getName();