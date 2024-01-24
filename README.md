# Simple Backend Project

## Description
This project is a simple backend application developed using Express.js. It showcases the fundamental concepts of RESTful API development. The codebase is structured around the Single Responsibility Principle, one of the core tenets of SOLID principles, ensuring the application is modular and maintainable.

## Features
- Utilizes Express.js for basic server functionality.
- Implements RESTful APIs, adhering to standard practices.
- Follows the Single Responsibility Principle for clean code organization.


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
