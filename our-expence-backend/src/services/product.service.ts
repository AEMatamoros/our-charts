import { Product } from "src/schemas/product.schama";
import { ProductRepository } from "src/repositories/product.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductService{
    constructor(private readonly productRepository: ProductRepository){}

    async getProducts(): Promise<Product[]>{
        return this.productRepository.find({})
    }

    async postProduct(name:string, price:number, category:any, date:any){
        return this.productRepository.create({
            name,
            price,
            category,
            date: new Date()
        })
    }

    async putProduct(id:string, productUpdate:any){
        return this.productRepository.finOneAndUpdate({id}, productUpdate)
    }

    async deleteProduct(id:string){
        return this.productRepository.findOneAndDelete({id});
    }
}