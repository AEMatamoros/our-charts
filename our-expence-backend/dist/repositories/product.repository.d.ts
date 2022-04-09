import { Model, FilterQuery } from "mongoose";
import { ProductDocument, Product } from "src/schemas/product.schama";
export declare class ProductRepository {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    find(productFilterQuery: FilterQuery<Product>): Promise<Product[]>;
    create(product: Product): Promise<Product>;
    finOneAndUpdate(productFilterQuery: FilterQuery<Product>, product: Partial<Product>): Promise<Product>;
    findOneAndDelete(productFilterQuery: FilterQuery<Product>): Promise<any>;
}
