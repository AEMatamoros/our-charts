import {Body, Controller, Get, Param, Put, Post, Delete} from '@nestjs/common';

import { Product } from 'src/schemas/product.schama';
import { ProductService } from 'src/services/product.service';

@Controller('product')
export class ProductController{
    constructor(private readonly productService: ProductService){}

    @Get()
    async getProduct():Promise<Product[]>{
        return this.productService.getProducts();
    }

    @Post()
    async postProduct(@Body() product:{name:string,price:number,category:any, date:Date}):Promise<Product>{
        return this.productService.postProduct(product.name, product.price, product.category, product.date);
    }

    @Put(":id")
    async putProduct(@Param() id:string, @Body() product:{name?:string,price?:number,category?:any}):Promise<Product>{
        return this.productService.putProduct(id, product);
    }

    @Delete(":id")
    async deleteProduct(@Param() _id:string):Promise<any>{
        return this.productService.deleteProduct(_id)
    }
}