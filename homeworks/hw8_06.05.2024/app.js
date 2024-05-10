import User from './users/User.js';

import Cart from './services/Cart.js';
import Order from './services/Order.js';

import {Book, SciFiBook, AdventureBook} from './publications/Books.js';
import {Magazine, SportsMagazine, FashionMagazine} from './publications/Magazines.js';


const user = new User("John Doe", "john@doe.com", "1");


const sciFiBook = new SciFiBook("Dune", "Frank Herbert", 9.99, true, "Dune Universe");
const adventureBook = new AdventureBook("The Hobbit", "J.R.R. Tolkien", 12.99, true, "Middle Earth");
const sportsMagazine = new SportsMagazine("Sports Illustrated", "August 2021", 4.99, true, "Football");


console.log(sciFiBook.getDescription())

const firstCart = new Cart(user);
firstCart.addItem(sciFiBook);
firstCart.addItem(adventureBook);
firstCart.addItem(sportsMagazine);
console.log(firstCart.showItems());
firstCart.clearCart()


const firstOrder = Order.createOrder(firstCart)

// console.log(`Order Id: ${firstOrder.getId()}, Summary: ${firstOrder.totalPrice}`)
