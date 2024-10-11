# Assignment Submission Portal

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Usage](#usage)

## Project Overview
This is a backend system for an assignment submission portal where users can register, log in, and upload assignments. Admins can register, log in, view assignments tagged to them, and accept or reject them. The system includes user management and proper input validation.

## Features
- User registration and login
- Admin registration and login
- Assignment upload by users
- View assignments by admins
- JWT authentication for secure API access
- Accept or reject the assignments by Admins

## Technologies Used
- **Node.js**: JavaScript runtime environment for building the server.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user and assignment data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **JWT (JSON Web Tokens)**: For secure authentication.
- **Postman**: For testing the API endpoints.

## Getting Started
To get a local copy of the project up and running, follow these steps:

### Prerequisites
- Node.js (>=14.x)
- MongoDB (or a MongoDB Atlas account)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yPgangothri/growthx.git
2. Change into the project directory
   ```bash
      cd your project
3. Install dependencies
   ```bash
     npm install
4. change database configuration in config/database.js
    ```bash
       JWT_SECRET=your_jwt_secret
### Usage
1. Start the server
   ```bash
     nodemon index.js
2. The server will run on http://localhost:5000.
3. Use Postman or any API testing tool to interact with the API endpoints
### API Endpoints
- User Registration: /api/register (POST)
- User Login: /api/login (POST)
- Assignment Upload: /assignments/upload (POST)
- Get Admins: /assignments/admins (GET)
- Get Assignments:/assignments (GET)
- Accept or reject assignments:/assignments/id/accept or reject (POST)
### Postman Collection
You can download the Postman collection from the following link:
[Download Postman Collection](https://www.postman.com/collections/27536473-2sAXxS6WLX)
  
