# Simple Backend Project

## Description

This backend project is a sophisticated solution developed using Express.js on top of Node.js, with MongoDB for database management through Mongoose. It exemplifies the principles of clean architecture and maintainable code, focusing on the Single Responsibility Principle (SRP) from the SOLID design principles to ensure that each module, class, or function has a singular, focused purpose. This project is a simple initiative designed to hone my skills and knowledge in these technologies.
## Features
- Utilizes Express.js for basic server functionality.
- Implements RESTful APIs, adhering to standard practices.
- Follows the Single Responsibility Principle for clean code organization.
-Leverages MongoDB for database management through Mongoose

## API Endpoints

Below are the available API endpoints for the backend application:

### Tours

- **GET `/api/V1/tours`**
  - Retrieves a list of all tours.

- **POST `/api/V1/tours`**
  - Creates a new tour.

- **DELETE `/api/V1/tours/:id`**
  - Deletes a tour with the specified ID.

- **GET `/api/V1/tours/:id`**
  - Retrieves details of a specific tour by ID.

- **PATCH `/api/V1/tours/:id`**
  - Updates a tour with the specified ID.

### Users

- **GET `/api/V1/users`**
  - Retrieves a list of all users.

- **POST `/api/V1/users`**
  - Creates a new user.

- **DELETE `/api/V1/users/:id`**
  - Deletes a user with the specified ID.

- **GET `/api/V1/users/:id`**
  - Retrieves details of a specific user by ID.

- **PATCH `/api/V1/users/:id`**
  - Updates a user with the specified ID.
