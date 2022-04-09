import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, FilterQuery } from "mongoose";

import { CategoryDocument, Category } from "src/schemas/category.schema";

@Injectable()
export class categoryRepository{
    constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>){}

    async find(categoryFilterQuery: FilterQuery<Category>): Promise<Category[]>{
        return this.categoryModel.find()
    }

    async create(category:Category):Promise<Category>{
        const newCategory = new this.categoryModel(category);
        return newCategory.save();
    }

    async finOneAndUpdate(categoryFilterQuery: FilterQuery<Category>, category: Partial<Category>):Promise<Category>{
        return this.categoryModel.findOneAndUpdate(categoryFilterQuery.id, category)
    }

    async findOneAndDelete(categorytFilterQuery: FilterQuery<Category>): Promise<any>{
        return this.categoryModel.findOneAndDelete(categorytFilterQuery.id)
    }
}