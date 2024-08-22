import { Product } from './product.types';

export class ProductService {
    private products: Product[] = [];

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public find(name: string): Product | undefined {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name.toLowerCase() === name.toLowerCase()) {
                return this.products[i];
            }
        }
        return undefined;
    }

    public filter(category: string): Product[] {
        const filteredProducts: Product[] = [];
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].category === category) {
                filteredProducts.push(this.products[i]);
            }
        }
        return filteredProducts;
    }

    public search(tag: string): Product[] {
        const result: Product[] = [];
        for (let i = 0; i < this.products.length; i++) {
            for (let j = 0; j < this.products[i].tags.length; j++) {
                if (this.products[i].tags[j].toLowerCase() === tag.toLowerCase()) {
                    result.push(this.products[i]);
                    break;
                }
            }
        }
        return result;
    }
}