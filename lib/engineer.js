// imports paret class
const Employee = require('./Employee')

// engineer class thats extends employee class
class Engineer extends Employee {

    constructor(name, id, email, github) {

        super(name, id, email);

        this.github = github;

    };

    getGithub() {

    };

    getRole() {
        return 'Engineer'
    };

   
};