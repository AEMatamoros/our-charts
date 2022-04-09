import { Category } from "src/schemas/category.schema";
import { categoryRepository } from "src/repositories/category.repository";
export declare class CategoryService {
    private readonly categoryRepository;
    constructor(categoryRepository: categoryRepository);
    getProducts(): Promise<Category[]>;
    postProduct(name: string, max: number, icon: any): Promise<Category>;
    putProduct(id: string, productUpdate: any): Promise<Category>;
    deleteProduct(id: string): Promise<any>;
}
