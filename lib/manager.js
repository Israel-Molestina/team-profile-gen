// imports paret class
const Employee = require('./Employee')

// Manager class thats extends employee class
class Manager extends Employee {

    constructor(name, id, email, officeNumber) {

        super(name, id, email);

        this.officeNumber = officeNumber;

    };

    getRole() {
        return 'Manager'
    };

};