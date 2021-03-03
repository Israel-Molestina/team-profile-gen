

function loopEngineer() {
    let engineersHtml = engineers.forEach(engineer => {
        `<section class="col-md-4">
        <div class="card">

            <div class="card-header">
              ${engineer.name}
            </div>

            <div class="card-body">

              <h5 class="card-title">name</h5>
              <p class="card-text">ID</p>
            </div>

        </div>

    </section> `
    })
    return engineersHtml
};

// function to generate team html page
function generateTeam(team) {
    return `
    <html lang="en">
    <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">

    </head>

    <body>

        <header class="header">
            <h1>My Team</h1>
        </header>

        <main class="row justify-content-center">

            <section class="col-md-10 justify-content-center text-center">

                <section class="row">

                    <div class="card">

                        <div class="card-header">
                          Manager
                        </div>

                        <div class="card-body">

                          <h5 class="card-title">name</h5>
                          <p class="card-text">Email</p>

                        </div>

                    </div>

                </section>

                <section class="row">
                    ${loopEngineer()} 

                    <section class="col-md-4">
                        <div class="card">

                            <div class="card-header">
                              Intern
                            </div>

                            <div class="card-body">

                              <h5 class="card-title">Name</h5>
                              <p class="card-text">ID</p>

                            </div>

                        </div>
                    
                    </section> 

                    <section class="col-md-4">
                        <div class="card">

                            <div class="card-header">
                              Intern
                            </div>

                            <div class="card-body">

                              <h5 class="card-title">Name</h5>
                              <p class="card-text">ID</p>

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
}