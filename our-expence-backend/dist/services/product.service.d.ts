import { Product } from "src/schemas/product.schama";
import { ProductRepository } from "src/repositories/product.repository";
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    getProducts(): Promise<Product[]>;
    postProduct(name: string, price: number, category: any, date: any): Promise<Product>;
    putProduct(id: string, productUpdate: any): Promise<Product>;
    deleteProduct(id: string): Promise<any>;
}
