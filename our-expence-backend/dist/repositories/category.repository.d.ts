import { Model, FilterQuery } from "mongoose";
import { CategoryDocument, Category } from "src/schemas/category.schema";
export declare class categoryRepository {
    private categoryModel;
    constructor(categoryModel: Model<CategoryDocument>);
    find(categoryFilterQuery: FilterQuery<Category>): Promise<Category[]>;
    create(category: Category): Promise<Category>;
    finOneAndUpdate(categoryFilterQuery: FilterQuery<Category>, category: Partial<Category>): Promise<Category>;
    findOneAndDelete(categorytFilterQuery: FilterQuery<Category>): Promise<any>;
}
