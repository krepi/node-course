# Custom Furniture Manufacturing System

## Table of Contents

- [Project Description](#project-description)
- [Functional Requirements](#functional-requirements)
    - [User Registration and Authentication](#user-registration-and-authentication)
    - [Order Placement](#order-placement)
    - [Cost Estimation](#cost-estimation)
    - [Order Tracking](#order-tracking)
    - [Inventory Management](#inventory-management)
    - [Admin Panel](#admin-panel)
- [Non-Functional Requirements](#non-functional-requirements)
    - [Performance](#performance)
    - [Scalability](#scalability)
    - [Security](#security)
    - [Reliability](#reliability)
    - [Usability](#usability)
- [Technologies and Their Applications](#technologies-and-their-applications)
    - [Backend](#backend)
    - [Database](#database)
    - [DevOps](#devops)
    - [Security](#security-1)
- [REST API Endpoints](#rest-api-endpoints)
    - [User Registration and Authentication](#user-registration-and-authentication-1)
    - [Elements Management](#elements-management)
    - [Projects Management](#projects-management)
    - [Categories Management](#categories-management)
    - [Colors Management](#colors-management)
- [Project Structure](#project-structure)

## Project Description

The Custom Furniture Manufacturing System is a web application designed to streamline the process of ordering
custom-made furniture. When a customer places an order, the system estimates the production time, material costs, and
labor costs. It also tracks the progress of the order from initiation to completion. The application aims to enhance
efficiency, provide accurate cost estimates, and ensure timely delivery of custom furniture.

## Functional Requirements

### User Registration and Authentication

- Users (customers and admins) must be able to register, log in, and manage their profiles.
- Authentication should be handled securely.

### Order Placement

- Customers can place orders for custom furniture by providing specifications and preferences.
- The system should collect detailed information about the furniture design.

### Cost Estimation

- The system should estimate the production time, material costs, and labor costs based on the provided specifications.
- Estimates should be accurate and consider current material prices and labor rates.

### Order Tracking

- Customers should be able to track the progress of their orders in real-time.
- Status updates should be provided at various stages of the production process.

### Inventory Management

- The system should manage inventory levels for materials.
- Alerts should be generated when materials are low or need replenishment.

### Admin Panel

- Admins should have access to a dashboard to manage orders, update production status, and oversee inventory.
- Reporting tools for analyzing production efficiency and costs.

## Non-Functional Requirements

### Performance

- The application should be responsive and handle multiple simultaneous users efficiently.

### Scalability

- The system should be scalable to accommodate growing numbers of users and orders.

### Security

- User data and transactions must be securely handled.
- The system should comply with industry-standard security practices.

### Reliability

- The application should have high availability, targeting 99.9% uptime.
- Data backup and recovery mechanisms should be in place.

### Usability

- The user interface should be intuitive and easy to navigate for both customers and admins.

## Technologies and Their Applications

### Backend

- **Node.js**: As the application server, handling business logic.
- **Express.js**: For creating RESTful APIs and middleware to manage authentication and other backend functions.

### Database

- **PostgreSQL**: Relational database for storing information about users, projects, and orders.

### DevOps

- **Docker**: For containerizing the application, facilitating deployment and management.

### Security

- **JWT (JSON Web Tokens)**: For securely transmitting information between parties.

## REST API Endpoints

### User Registration and Authentication

#### POST /api/v1/auth/register

- Register a new user.

**Request:**

```bash
curl -X 'POST'   '/api/v1/auth/register'   -H 'Content-Type: application/json'   -d '{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "secret",
    "role": "admin"
  }'
```

**Response:**

```json
{
  "token": "jwt_token_here"
}
```

#### POST /api/v1/auth/login

- Authenticate a user.

**Request:**

```bash
curl -X 'POST'   '/api/v1/auth/login'   
   -H 'Content-Type: application/json' 
   -d '{
    "email": "john.doe@example.com",
    "password": "secret"
  }'
```

**Response:**

```json
{
  "token": "jwt_token_here"
}
```

### Elements Management

#### POST /api/v1/elements

- Create a new element (admin only).

**Request:**

```bash
curl -X 'POST'   '/api/v1/elements'   
-H 'Content-Type: application/json'   
-H 'Authorization: Bearer jwt_token_here'   
-d '{
    "name": "Table Leg",
    "width": 5.0,
    "height": 70.0,
    "depth": 5.0,
    "material": "Wood",
    "price": 10.0,
    "stock": 100,
    "categoryId": 1,
    "colorId": 2
  }'
```

**Response:**

```json
{
  "id": 1,
  "name": "Table Leg",
  "width": 5.0,
  "height": 70.0,
  "depth": 5.0,
  "material": "Wood",
  "price": 10.0,
  "stock": 100,
  "categoryId": 1,
  "colorId": 2
}
```

#### GET /api/v1/elements

- Get a list of elements with optional filtering.

**Request:**

```bash
curl -X 'GET'   '/api/v1/elements?categoryId=1&colorId=2'   
-H 'Authorization: Bearer jwt_token_here'
```

**Response:**

```json
[
  {
    "id": 1,
    "name": "Table Leg",
    "width": 5.0,
    "height": 70.0,
    "depth": 5.0,
    "material": "Wood",
    "price": 10.0,
    "stock": 100,
    "categoryId": 1,
    "colorId": 2
  }
]
```

#### GET /api/v1/elements/:id

- Get details of an element by ID.

**Request:**

```bash
curl -X 'GET'   '/api/v1/elements/1'   
-H 'Authorization: Bearer jwt_token_here'
```

**Response:**

```json
{
  "id": 1,
  "name": "Table Leg",
  "width": 5.0,
  "height": 70.0,
  "depth": 5.0,
  "material": "Wood",
  "price": 10.0,
  "stock": 100,
  "categoryId": 1,
  "colorId": 2
}
```

### Projects Management

#### POST /api/v1/users/:userId/projects

- Create a new project for a user.

**Request:**

```bash
curl -X 'POST'   '/api/v1/users/1/projects'   
-H 'Content-Type: application/json'   
-H 'Authorization: Bearer jwt_token_here'   
-d '{
    "name": "New Project",
    "elements": []
  }'
```

**Response:**

```json
{
  "id": 1,
  "userId": 1,
  "name": "New Project",
  "status": "draft",
  "elements": []
}
```

#### GET /api/v1/users/:userId/projects

- Get a list of projects for a user.

**Request:**

```bash
curl -X 'GET'   '/api/v1/users/1/projects'   
-H 'Authorization: Bearer jwt_token_here'
```

**Response:**

```json
[
  {
    "id": 1,
    "userId": 1,
    "name": "New Project",
    "status": "draft",
    "elements": []
  }
]
```

#### GET /api/v1/users/:userId/projects/:projectId

- Get details of a project for a user by project ID.

**Request:**

```bash
curl -X 'GET'   '/api/v1/users/1/projects/1'   
-H 'Authorization: Bearer jwt_token_here'
```

**Response:**

```json
{
  "id": 1,
  "userId": 1,
  "name": "New Project",
  "status": "draft",
  "elements": []
}
```

#### PUT /api/v1/users/:userId/projects/:projectId/add-element

- Add an element to an existing project.

**Request:**

```bash
curl -X 'PUT'   '/api/v1/users/1/projects/1/add-element'   
-H 'Content-Type: application/json'   
-H 'Authorization: Bearer jwt_token_here'   
-d '{
    "elementId": 1,
    "quantity": 4
  }'
```

**Response:**

```json
{
  "message": "Element added to project"
}
```

#### PUT /api/v1/users/:userId/projects/:projectId/confirm

- Confirm a project, creating an order.

**Request:**

```bash
curl -X 'PUT'   '/api/v1/users/1/projects/1/confirm'   
-H 'Authorization: Bearer jwt_token_here'
```

**Response:**

```json
{
  "message": "Project confirmed"
}
```

### Categories Management

#### POST /api/v1/categories

- Create a new category (admin only).

**Request:**

```bash
curl -X 'POST'   '/api/v1/categories'   
-H 'Content-Type: application/json'   
-H 'Authorization: Bearer jwt_token_here'   
-d '{
    "name": "Table Legs"
  }'
```

**Response:**

```json
{
  "id": 1,
  "name": "Table Legs"
}
```

#### GET /api/v1/categories

- Get a list of categories.

**Request:**

```bash
curl -X 'GET'   '/api/v1/categories'   
-H 'Authorization: Bearer jwt_token_here'
```

**Response:**

```json
[
  {
    "id": 1,
    "name": "Table Legs"
  }
]
```

### Colors Management

#### POST /api/v1/colors

- Create a new color (admin only).

**Request:**

```bash
curl -X 'POST'   '/api/v1/colors'   
-H 'Content-Type: application/json'   
-H 'Authorization: Bearer jwt_token_here'   
-d '{
    "name": "Black"
  }'
```

**Response:**

```json
{
  "id": 1,
  "name": "Black"
}
```

#### GET /api/v1/colors

- Get a list of colors.

**Request:**

```bash
curl -X 'GET'   '/api/v1/colors'   
-H 'Authorization: Bearer jwt_token_here'
```

**Response:**

```json
[
  {
    "id": 1,
    "name": "Black"
  }
]
```

## Project Structure

```
backend/
├── src/
│   ├── models/
│   │   ├── userModel.js
│   │   ├── elementModel.js
│   │   ├── projectModel.js
│   │   ├── categoryModel.js
│   │   ├── colorModel.js
│   ├── repositories/
│   │   ├── userRepository.js
│   │   ├── elementRepository.js
│   │   ├── projectRepository.js
│   │   ├── categoryRepository.js
│   │   ├── colorRepository.js
│   ├── services/
│   │   ├── userService.js
│   │   ├── elementService.js
│   │   ├── projectService.js
│   │   ├── categoryService.js
│   │   ├── colorService.js
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── elementController.js
│   │   ├── projectController.js
│   │   ├── categoryController.js
│   │   ├── colorController.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── elementRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── categoryRoutes.js
│   │   ├── colorRoutes.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   ├── config/
│   │   └── database.js
│   └── app.js
├── .env
├── .gitignore
├── Dockerfile
└── docker-compose.yml

```
