import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, FilterQuery } from "mongoose";

import { ProductDocument, Product } from "src/schemas/product.schama";

@Injectable()
export class ProductRepository{
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>){}

    async find(productFilterQuery: FilterQuery<Product>): Promise<Product[]>{
        return this.productModel.find()
    }

    async create(product:Product):Promise<Product>{
        const newProduct = new this.productModel(product);
        return newProduct.save();
    }

    async finOneAndUpdate(productFilterQuery: FilterQuery<Product>, product: Partial<Product>):Promise<Product>{
        return this.productModel.findOneAndUpdate({_id:productFilterQuery.id.id}, product)
    }

    async findOneAndDelete(productFilterQuery: FilterQuery<Product>): Promise<any>{
        return this.productModel.findOneAndDelete({_id:productFilterQuery.id.id})
    }
}