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
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the employees name?"
                }
            ])
            .then(dataName => {
                name += dataName;
            })
    };

    getId() {

    };

    getEmail() {

    };

    getRole() {
        return 'Employee'
    };

};

const name = "";





module.exports = Employee;