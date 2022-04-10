import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductController } from "src/controllers/product.controller";
import { ProductRepository } from "src/repositories/product.repository";
import { ProductService } from "src/services/product.service";
import { Product, productSchema } from "./product.schama";

import { CategoryController } from "src/controllers/category.controller";
import { categoryRepository } from "src/repositories/category.repository";
import { CategoryService } from "src/services/category.service";
import { Category, categorySchema } from "./category.schema";

import { TrackRepository } from "src/repositories/track.repository";
import { TrackController } from "src/controllers/trackController";
import { TrackService } from "src/services/track.service";


@Module({
    imports: [MongooseModule.forFeature([{
        name: Product.name, schema:productSchema
    },{
        name: Category.name, schema:categorySchema
    }])],
    controllers: [ProductController, CategoryController, TrackController],
    providers: [ProductService, ProductRepository, CategoryService, categoryRepository, TrackRepository, TrackService]
})

export class ProductModule {}