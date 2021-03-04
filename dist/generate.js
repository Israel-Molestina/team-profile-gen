const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// function to loop through engineers and create cards for each
function loopEngineer(teamEngineer) {
    let engineersHtml = teamEngineer.map(engineer => {
        `<section class="col">
            <div class="card shadow rounded">

                <div class="card-header">
                    Name <br>
                    Engineer
                </div>

                <div class="card-body">

                    <ul class="list-group list-group-flush border">
                        <li class="list-group-item">ID:</li>
                        <li class="list-group-item">Email:</li>
                        <li class="list-group-item">GitHub</li>
                    </ul>

                </div>

            </div>
        </section>`
    })
    return engineersHtml;
};

// function to loop through interns and create cards for each
function loopIntern(teamIntern) {
    let internsHtml = teamIntern.map(intern => {
        `<section class="col">
            <div class="card shadow rounded">

                <div class="card-header">
                    Name <br>
                    Intern
                </div>

                <div class="card-body">

                    <ul class="list-group list-group-flush border">
                        <li class="list-group-item">ID:</li>
                        <li class="list-group-item">Email:</li>
                        <li class="list-group-item">School:</li>
                    </ul>

                </div>

            </div>

        </section> `
    })
    return internsHtml;
};

// function to generate team html page
function generateTeam(teamManager, teamEngineer, teamIntern) {
    console.log(teamManager);
    console.log(teamManager[0].getRole())

    return `
    <html lang="en">
    <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">

    </head>

    <body>

        <header class="header">
            <h1>My Team</h1>
        </header>

        <main class="row justify-content-center">

            <section class="col-md-10 justify-content-center text-center m-3">


                <div class="card shadow rounded">

                    <div class="card-header">

                        ${teamManager[0].getName()} 
                        <br>
                        ${teamManager[0].getRole()} 

                    </div>

                    <div class="card-body">

                        <ul class="list-group list-group-flush border">

                            <li class="list-group-item">ID: ${teamManager[0].getId()} </li>
                            <li class="list-group-item">Email: ${teamManager[0].getEmail()} </li>
                            <li class="list-group-item">Office Number: ${teamManager[0].getOfficeNum()} </li>

                        </ul>

                    </div>

                </div>
                

                <section class="row row-cols-1 row-cols-md-3 g-4 mt-2">
                    

                    <section class="col">
                        <div class="card shadow rounded">

                            <div class="card-header">
                                Name <br>
                                Engineer
                            </div>

                            <div class="card-body">

                                <ul class="list-group list-group-flush border">
                                    <li class="list-group-item">ID:</li>
                                    <li class="list-group-item">Email:</li>
                                    <li class="list-group-item">GitHub</li>
                                </ul>

                            </div>

                        </div>
                    </section> 

                    <section class="col">
                        <div class="card shadow rounded">

                            <div class="card-header">
                                Name <br>
                                Intern
                            </div>

                            <div class="card-body">

                                <ul class="list-group list-group-flush border">
                                    <li class="list-group-item">ID:</li>
                                    <li class="list-group-item">Email:</li>
                                    <li class="list-group-item">School:</li>
                                </ul>

                            </div>

                        </div>

                    </section> 

                </section>
            
            </section>

        </main>
   


    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>

    </body>
    </html>
    `
};

module.exports = generateTeam;