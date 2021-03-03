const inquirer = require("inquirer");

// partent class 
class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    // prompts user for employees name
    getName() {
        return this.name
    };

    getId() {
        return this.id
    };

    getEmail() {
        return this.email
    };

    getRole() {
        return 'Employee'
    };

};


let name = "";






module.exports = Employee;