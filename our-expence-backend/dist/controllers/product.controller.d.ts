import { Product } from 'src/schemas/product.schama';
import { ProductService } from 'src/services/product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getProduct(): Promise<Product[]>;
    postProduct(product: {
        name: string;
        price: number;
        category: any;
        date: Date;
    }): Promise<Product>;
    putProduct(id: string, product: {
        name?: string;
        price?: number;
        category?: any;
    }): Promise<Product>;
    deleteProduct(id: string): Promise<any>;
}
