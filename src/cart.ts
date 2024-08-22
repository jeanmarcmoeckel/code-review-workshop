import { CartItem } from './cart.types';

export class ShoppingCart {
    private items: CartItem[] = [];

    public addItem(item: CartItem): void {
        this.items.push(item);
    }

    public calculateTotal(discountPercentage: number = 0, taxRate: number = 0.1): number {
        let total = 0;

        for (const item of this.items) {
            total += item.price * item.quantity;
        }

        if (discountPercentage > 0) {
            total = total - discountPercentage;
        }

        total = total + (total * taxRate);

        return total;
    }
}