
# Burger Eater
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description

This app allows a user to create a burger, and then eat the burger. The app utilizes a MySQL database, found in the 'db' folder, which holds the burger name and an index in a 'burgers' table. The app is written in javascript and express is used to create routes for the server. The repository follows the MVC Paradigm file-structure and express-handlebars are used to dynamically render the objects on the user's screen. The burger.js file within the public directory handles the onclick events for the form and the button to eat the burger. When the buttons are clicked, a POST or PUT route is triggered and routed through burgerController.js and eventually orm.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

- Navigate to the 'db' directory and use the 'schema.sql' file to create a database on your local machine.
- It is recommended to use the 'seeds.sql' file to populate the database before continuing.
- Navigate to the 'config' directory and alter the 'connection.js' file and alter the values between lines 4 and 7 to correspond with the settings for your mySQL machine instance. 
- Type 'npm i' into CMD to install the neccesary packages for this repository.
- Type 'node server.js' into the CMD to run the server.
- Navigate to 'localhost:7777' in your browser to access the front end of the application.

## Usage

Eating burgers

## Credits

Brandon Lee Piercy

## License

MIT

## Tests

none

## Questions

You can contact me at b.piercy567@gmail.com in case you have any questions or concerns about this repository.
You may also reach me or browse my other repositories at my [Github Profile](https://github.com/brandonleepiercy)
