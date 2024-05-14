import {SciFiBook, AdventureBook} from './publications/Books.js';
import {SportsMagazine, FashionMagazine} from './publications/Magazines.js';
import Customer from './users/Customer.js';
import Admin from "./users/Admin.js";


// Create products
const sciFiBook = new SciFiBook("Dune", "Frank Herbert", 9.99, true, "Dune Universe");
const adventureBook = new AdventureBook("The Hobbit", "J.R.R. Tolkien", 12.99, true, "Middle Earth");
const sportsMagazine = new SportsMagazine("Sports Illustrated", "August 2021", 4.99, true, "Football");
const fashionMagazine = new FashionMagazine("Vogue", "April 2024", 5.99, true, "Spring Collections");

// Create customer
const customer = new Customer("John Doe", "john@doe.com", "1");

// Add to cart
customer.cart.addItem(sciFiBook);
customer.cart.addItem(adventureBook);
customer.cart.addItem(sportsMagazine);
customer.cart.addItem(fashionMagazine);

// Display items cart and info
console.log(customer.cart.showItems());


console.log(customer.cart.cartInfo());

// Order
const order = customer.placeOrder();
if (order) {
    console.log(`Order ID: ${order.getId()}, Total: $${order.totalPrice}`);
    order.updateStatus("Paid");
    console.log(order.orderSummary());
}

// Create Admin
const admin = new Admin("Alice Administrator", "alice@example.com", "2");


admin.manageUsers();
admin.deleteUser(customer);



