# DIY Store API

![version](https://img.shields.io/badge/version-1.0.0-blue)
![express](https://img.shields.io/badge/express-4.18.2-green)

## Overview

DIY Store API is a backend server application designed to support the functionality of the DIY Store web application. It serves as the middleware between the client-side interface and the database, handling requests, managing data, and ensuring smooth interactions between the user interface and the server. The API is built using Node.js, Express.js, and MongoDB with Mongoose for data modeling and management.

## Table of Contents

- [Getting Started](#getting-started)
 - [Routes](#routes)
 - [Example](#example)
- [Used Packages](#diy-store-api-utilizes-the-following-npm-packages)

## Getting Started
### Routes

![Routes](https://github.com/joaopaulosf/diy-store-api/assets/100176817/a5244eb3-1aa8-4e97-abaa-0b3bf61c29e3)

### Example

```sh
fetch('https://diystore-api.onrender.com/products/1')
  .then(res => res.json())
  .then(json => console.log(json))
```

### DIY Store API utilizes the following npm packages:

- [Express](https://expressjs.com/pt-br/): A fast, opinionated, minimalist web framework for Node.js.
- [Mongoose](https://mongoosejs.com/): An elegant MongoDB object modeling tool designed to work in an asynchronous environment.
- [Cors](https://github.com/expressjs/cors): Middleware for Express.js to enable Cross-Origin Resource Sharing.
- [Dotenv](https://github.com/motdotla/dotenv): A zero-dependency module that loads environment variables from a .env file into process.env.
- [Nodemon](https://github.com/remy/nodemon): A utility that monitors for changes in files and automatically restarts the server.

**These packages streamline the development process and ensure efficient server-side functionality for the DIY Store application.**


