import {Body, Controller, Get, Param, Put, Post, Delete} from '@nestjs/common';

import { Category } from 'src/schemas/category.schema';
import { CategoryService } from 'src/services/category.service';

@Controller('category')
export class CategoryController{
    constructor(private readonly categoryService: CategoryService){}

    @Get()
    async getProduct():Promise<Category[]>{
        return this.categoryService.getProducts();
    }

    @Post()
    async postProduct(@Body() category:{name:string,max:number,icon:string}):Promise<Category>{
        return this.categoryService.postProduct(category.name, category.max, category.icon);
    }

    @Put(":id")
    async putProduct(@Param() id:string, @Body() product:{name?:string,max?:number,icon?:string}):Promise<Category>{
        return this.categoryService.putProduct(id, product);
    }

    @Delete(":id")
    async deleteProduct(@Param() _id:string):Promise<any>{
        return this.categoryService.deleteProduct(_id)
    }
}