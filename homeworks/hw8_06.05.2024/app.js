import User from './users/User.js';
import Cart from './services/Cart.js';
import Order from './services/Order.js';

import {SciFiBook, AdventureBook} from './publications/Books.js';
import {SportsMagazine, FashionMagazine} from './publications/Magazines.js';


const user = new User("John Doe", "john@doe.com", "1");


const sciFiBook = new SciFiBook("Dune", "Frank Herbert", 9.99, true, "Dune Universe");
const adventureBook = new AdventureBook("The Hobbit", "J.R.R. Tolkien", 12.99, true, "Middle Earth");
const sportsMagazine = new SportsMagazine("Sports Illustrated", "August 2021", 4.99, true, "Football");
const fashionMagazine = new FashionMagazine("Vogue", "August 2021", 5.99, true, "Spring Collections");

console.log(sciFiBook.getDescription())

const firstCart = new Cart(user);
firstCart.addItem(sciFiBook);
firstCart.addItem(adventureBook);
firstCart.addItem(sportsMagazine);
firstCart.addItem(fashionMagazine);
console.log(firstCart.showItems());

// firstCart.clearCart()


const firstOrder = Order.createOrder(firstCart)

console.log(`Order Id: ${firstOrder.getId()}, Summary: ${firstOrder.totalPrice}`)
