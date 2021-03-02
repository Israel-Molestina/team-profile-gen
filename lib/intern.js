// imports parent class
const Employee = require('./Employee')

// Intern class thats extends employee class
class Intern extends Employee {

    constructor(name, id, email, school) {

        super(name, id, email);

        this.school = school; 

    };

    getSchool() {

    };

    getRole() {

    };

};