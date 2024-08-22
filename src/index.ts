import { ShoppingCart } from './cart';
import { CartItem } from './cart.types';

const cart = new ShoppingCart();

const item1: CartItem = { name: 'Laptop', price: 1000, quantity: 1 };
const item2: CartItem = { name: 'Mouse', price: 50, quantity: 2 };

cart.addItem(item1);
cart.addItem(item2);

const total = cart.calculateTotal(10);
console.log(`Total price: $${total}`);