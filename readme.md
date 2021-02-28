## Developers Social Media

#### The Set Up

First start with initialising npm.

    npm init

    {
        "name": "dev_social",
        "version": "1.0.0",
        "description": "Social network for developers",
        "main": "server.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "Alex Ford",
        "license": "MIT"
    }

Then install any project dependencies.

    npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request

Other development dependencies.

    npm i -D nodemon concurrently

Create a file called 'server.js':

    const express = require('express');
    const app = express();

    app.get('/', (req, res) => res.send('API Running'));

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

Update the package.json to:

    "scripts": {
        "start": "node server",
        "server": "nodemon server"
    },

Run the project with the following command:

    npm run server

Go to the browser and search the following to view the project.

    http://localhost:5000/

#### Connecting to the database

## Acknowledgements

[Udemy](https://www.udemy.com/course/mern-stack-front-to-back/learn/lecture/10055140#notes)
