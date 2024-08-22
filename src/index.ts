import { ProductService } from './product.service';
import { Product } from './product.types';

const pService = new ProductService();

const p1: Product = { id: 1, name: 'Laptop', category: 'Electronics', price: 1000, tags: ['computers', 'technology'] };
const p2: Product = { id: 2, name: 'Headphones', category: 'Electronics', price: 100, tags: ['audio', 'technology'] };
const p3: Product = { id: 3, name: 'Coffee Maker', category: 'Home Appliances', price: 50, tags: ['kitchen', 'appliances'] };

pService.addProduct(p1);
pService.addProduct(p2);
pService.addProduct(p3);

console.log(pService.find('Laptop'));
console.log(pService.filter('Electronics'));
console.log(pService.search('technology'));