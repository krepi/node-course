# Project Documentation

## Table of Contents

1. [Overview](#overview)
2. [Classes and Relationships](#classes-and-relationships)
    - [Publication](#publication)
    - [Book](#book)
    - [Magazine](#magazine)
    - [Cart](#cart)
    - [Order](#order)
    - [User](#user)
    - [Customer](#customer)
    - [Admin](#admin)
3. [Order Process](#order-process)
4. [Usage Example](#usage-example)
5. [File Structure](#file-structure)
6. [Directory Structure](#directory-structure)
7. [Getting Started](#getting-started)

## Overview

This documentation provides a detailed look at the classes within the project, their methods, and how they interact.
This project models publications like books and magazines, incorporates a shopping cart and order system, and organizes
these functionalities within a structured folder layout.

## Classes and Relationships

This section details the classes, their methods, and how they relate to one another. This project uses inheritance and
polymorphism extensively to promote code reusability and scalability.

### `Publication` (located in `publications/Publication.js`)

The base class for all publication types.

- **Constructor**: Accepts `title`, `price`, and `availability`.
- **Methods**:
    - `updateAvailability(newStatus)`: Updates the availability of the publication.
    - `getDescription()`: Returns a description including title and price.

### `Book` (extends `Publication`, located in `publications/Books.js`)

Represents a book, extending `Publication` to include author-specific properties. This class showcases inheritance by
utilizing the basic structure of a publication and adding unique attributes and behaviors like handling authors.

- **Constructor**: Adds `author` to the base constructor.
- **Method**:
    - `getDescription()`: Returns a description including the title, author, and price.

#### `SciFiBook` (extends `Book`, located in `publications/Books.js`)

Represents a science fiction book.

- **Constructor**: Adds `universe` to the book constructor.
- **Method**:
    - `getDescription()`: Returns a description including the title, author, universe, and price.

#### `AdventureBook` (extends `Book`, located in `publications/Books.js`)

Represents an adventure book.

- **Constructor**: Adds `setting` to the book constructor.
- **Method**:
    - `getDescription()`: Returns a description including the title, author, setting, and price.

### `Magazine` (extends `Publication`, located in `publications/Magazines.js`)

Represents a magazine, extending `Publication` to include issue-specific properties.

- **Constructor**: Adds `issueNumber` to the base constructor.
- **Method**:
    - `getDescription()`: Returns a description including the issue number and price.

#### `SportsMagazine` (extends `Magazine`, located in `publications/Magazines.js`)

Represents a sports magazine.

- **Constructor**: Adds `sportsType` to the magazine constructor.
- **Method**:
    - `getDescription()`: Returns a description including the issue number, sports type, and price.

#### `FashionMagazine` (extends `Magazine`, located in `publications/Magazines.js`)

Represents a fashion magazine.

- **Constructor**: Adds `trends` to the magazine constructor.
- **Method**:
    - `getDescription()`: Returns a description including the issue number, trends, and price.

### `Cart` (located in `services/Cart.js`)

A shopping cart for managing user's purchases.

- **Constructor**: Accepts `user`.
- **Methods**:
    - `addItem(item)`: Adds an item to the cart.
    - `removeItem(itemId)`: Removes an item from the cart.
    - `showItems()`: Displays all items in the cart.
    - `calculateTotal()`: Calculates the total price of items.
    - `clearCart()`: Clears the cart.

### `Order` (located in `services/Order.js`)

Represents an order.

- **Constructor**: Accepts a `cart` and creates an order if the cart is not empty.
- **Static Method**:
    - `createOrder(cart)`: Creates a new order if the cart is not empty.
- **Method**:
    - `getId()`: Returns the order ID.

### `User` (located in `users/User.js`)

Represents a user.

- **Constructor**: Accepts `name`, `email`, and `userId`.

### `Customer` (extends `User`, located in `users/Customer.js`)

Represents a customer capable of placing orders.

- **Constructor**: Inherits `name`, `email`, and `userId` from `User` and initializes a new `Cart`.
- **Method**:
    - `placeOrder()`: Creates an order from the cart's items and clears the cart.

### `Admin` (extends `User`, located in `users/Admin.js`)

Represents an administrator with enhanced privileges.

- **Constructor**: Inherits `name`, `email`, and `userId` from `User` and sets admin privileges.
- **Methods**:
    - `manageUsers()`: Provides functionality to manage other users.
    - `deleteUser(user)`: Deletes a user from the system.

## Order Process

The order process outlines how a user can purchase books and magazines through the system. Below is a step-by-step guide
illustrating the interactions between different classes during an order.

### Steps to Order a Book

1. **User Creation**: First, an instance of the `User` class is created with necessary details like name and email.
    ```javascript
    const customer = new Customer("John Doe", "john@doe.com", "1");
    ```

2. **Adding Publications to Cart**:
    - An instance of `Cart` is created for the user.
    - Books or magazines are created and added to the cart. Here, the `addItem` method of the `Cart` class is used.
    ```javascript
    const sciFiBook = new SciFiBook("Dune", "Frank Herbert", 9.99, true, "Dune Universe");
    customer.cart.addItem(sciFiBook);
    ```

3. **Creating an Order**:
    - The order is created using the `createOrder` static method of the `Order` class. This method checks if the cart is
      not empty and proceeds to create an order.
    ```javascript
    const order = customer.placeOrder();
    if (order) {
    console.log(`Order ID: ${order.getId()}, Total: $${order.totalPrice}`);
    
        order.updateStatus("Paid");
    }
    ```

4. **Order Summary**:
    - Display the order summary to the user, including items purchased and total price.
    ```javascript
       console.log(order.orderSummary());;
    ```

## File Structure

- `/publications`
    - `Publication.js` - Contains `Publication`.
    - `Books.js` - Contains `Book`, `SciFiBook`, `AdventureBook`.
    - `Magazines.js` - Contains `Magazine`, `SportsMagazine`, `FashionMagazine`.
- `/services`
    - `Cart.js` - Contains `Cart`.
    - `Order.js` - Contains `Order`.
- `/users`
    - `User.js` - Contains `User`.
    - `Customer.js` - Contains `Customer`.
    - `Admin.js` - Contains `Admin`.
- `app.js` - Main application script that utilizes all of the above.

## Directory Structure

### Notes

- Ensure that each book or magazine has sufficient stock before adding it to the cart.
- Handle errors such as "empty cart" or "item not available" appropriately to guide the user.

## File Structure

- `/publications`
    - `Publication.js` - Contains `Publication`.
    - `Books.js` - Contains `Book`, `SciFiBook`, `AdventureBook`.
    - `Magazines.js` - Contains `Magazine`, `SportsMagazine`, `FashionMagazine`.
- `/services`
    - `Cart.js` - Contains `Cart`.
    - `Order.js` - Contains `Order`.
- `/users`
    - `User.js` - Contains `User`.
- `app.js` - Main application script that utilizes all of the above.

## Directory Structure

```
project-root
│ app.js
│
├───publications
│ │ Publication.js
│ │ Books.js
│ │ Magazines.js
│
├───services
│ │ Cart.js
│ │ Order.js
│
└───users
│ | User.js
│ | Admin.js
│ | Customer.js
```

## Usage Example

```javascript
const customer = new Customer("John Doe", "john@doe.com", "1");
const sciFiBook = new SciFiBook("Dune", "Frank Herbert", 9.99, true, "Dune Universe");
customer.cart.addItem(sciFiBook);
const order = customer.placeOrder();
if (order) {
    console.log(`Order ID: ${order.getId()}, Total: $${order.totalPrice}`);
    order.updateStatus("Paid");
    console.log(order.orderSummary());
}
```

## Getting Started

This section provides a quick guide on how to set up and start using the project.

### Prerequisites

Before you begin, ensure you have Node.js installed on your machine. This project uses ES6 features and depends on
Node.js for its environment. Visit [Node.js official website](https://nodejs.org/) to download and install it if you
haven't already.

### Installation

1. **Clone the repository**:

```
git clone https://github.com/krepi/node-course/tree/main/homeworks/hw8_06.05.2024
cd hw8_06.05.2024
```

2. **Install dependencies**:
   Navigate to the project directory and run:

```
npm install
```

This command will install all necessary dependencies listed in `package.json`, including the `uuid` module which is
essential for this project.

3. **Running the application**:
   To start the application, run:

```
node app.js
```

This will execute the main application file using Node.js.

### Testing

Currently, the project does not have tests specified. You can add tests in the `scripts` section of `package.json` and
run them using:

```
npm test
```