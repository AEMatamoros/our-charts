import { Category } from "src/schemas/category.schema";
import { categoryRepository } from "src/repositories/category.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CategoryService{
    constructor(private readonly categoryRepository: categoryRepository){}

    async getProducts(): Promise<Category[]>{
        return this.categoryRepository.find({})
    }

    async postProduct(name:string, max:number, icon:any){
        return this.categoryRepository.create({
            name,
            icon,
            max
        })
    }

    async putProduct(id:string, productUpdate:any){
        return this.categoryRepository.finOneAndUpdate({id}, productUpdate)
    }

    async deleteProduct(id:string){
        return this.categoryRepository.findOneAndDelete({id});
    }
}