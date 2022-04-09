import { Category } from 'src/schemas/category.schema';
import { CategoryService } from 'src/services/category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getProduct(): Promise<Category[]>;
    postProduct(category: {
        name: string;
        max: number;
        icon: string;
    }): Promise<Category>;
    putProduct(id: string, product: {
        name?: string;
        max?: number;
        icon?: string;
    }): Promise<Category>;
    deleteProduct(_id: string): Promise<any>;
}
