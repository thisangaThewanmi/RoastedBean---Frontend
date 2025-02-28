 export class Item {
    id: string;
    name: string;
    description: string | null;
    price: number; // Assuming Decimal is represented as a number in TypeScript
    availability: boolean;
    imageUrl: string;
    category: string; // Foreign key to Category
    quantity: number;

    constructor(id: string, name: string, description: string | null, price: number, availability: boolean, imageUrl: string, category: string, quantity: number
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.availability = availability;
        this.imageUrl = imageUrl;
        this.category = category;
        this.quantity = quantity;
    }
}