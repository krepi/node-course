# Custom Furniture Manufacturing System

## Project Description

The Custom Furniture Manufacturing System is a web application designed to streamline the process of ordering custom-made furniture. When a customer places an order, the system estimates the production time, material costs, and labor costs. It also tracks the progress of the order from initiation to completion. The application aims to enhance efficiency, provide accurate cost estimates, and ensure timely delivery of custom furniture.

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
- 3D rendering of furniture designs should be smooth and fast.

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

### Frontend

- **React**: For building a dynamic and responsive user interface.
- **TypeScript**: For improving code readability and reliability with static typing.
- **Three.js**: For rendering 3D models of custom furniture in the browser.
- **React Three Fiber**: For integrating Three.js with React, making it easier to manage 3D scenes.
- **Next.js**: For server-side rendering (SSR) and static site generation (SSG), enhancing performance and SEO.

### Backend

- **Node.js**: As the application server, handling business logic.
- **Express.js**: For creating RESTful APIs and middleware to manage authentication and other backend functions.
- **Prisma**: ORM for database management and automated migrations.

### Database

- **PostgreSQL**: Relational database for storing information about users, projects, and orders.
- **AWS S3**: For storing files such as 3D models and images.

### DevOps

- **Docker**: For containerizing the application, facilitating deployment and management.
- **Kubernetes**: For automating deployment, scaling, and management of containerized applications.
- **Terraform**: For managing infrastructure as code (IaC).

### CI/CD

- **GitHub Actions**: For automating continuous integration and continuous deployment (CI/CD) processes.

### Security

- **OAuth2 / OpenID Connect**: For managing user identity and access control.
- **JWT (JSON Web Tokens)**: For securely transmitting information between parties.

### Synchronization

- **WebSockets (Socket.io)**: For real-time synchronization of order statuses and updates.

### Data Analytics

- **Google Analytics**: For monitoring and analyzing user interactions with the application.

## REST API Endpoints

### User Registration and Authentication

- **POST /api/register**: Register a new user.
- **POST /api/login**: Authenticate a user.

### Order Placement

- **POST /api/orders**: Place a new order for custom furniture.

### Cost Estimation

- **GET /api/orders/:orderId/estimate**: Get the cost estimation for an order.

### Order Tracking

- **GET /api/orders/:orderId/status**: Get the current status of an order.

### Inventory Management

- **GET /api/inventory**: Get current inventory levels.
- **POST /api/inventory**: Update inventory levels.

### Admin Panel

- **GET /api/admin/orders**: Get all orders for management.
- **PUT /api/admin/orders/:orderId/status**: Update the status of an order.


