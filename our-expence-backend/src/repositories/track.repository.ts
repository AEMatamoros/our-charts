import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, FilterQuery } from "mongoose";

import { ProductDocument, Product } from "src/schemas/product.schama";

@Injectable()
export class TrackRepository {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }

    async findMonthTrack(data: FilterQuery<Product>): Promise<Product[]> {
        var today = new Date();
    
        // return this.productModel.find({
        //     date: {
        //         $gte: new Date(today.getFullYear(), today.getMonth() , 0),
        //         $lt: new Date(today.getFullYear(), today.getMonth() + 1,0)
        //     },
        // })
        if(data.year && data.month){
            return this.productModel.aggregate([
                {
                  $match: {
                      "date": {
                        $gte: new Date(data.year, data.month-1 , 0),
                        $lt: new Date(data.year, data.month,0)
                      }
                  }
                },
                {
                    $group: {
                        _id: "$category",
                        total: { $sum: "$price"}
                    }
                },
            ]).exec()
        }else{
            return this.productModel.aggregate([
                {
                  $match: {
                      "date": {
                        $gte: new Date(today.getFullYear(), today.getMonth() , 0),
                        $lt: new Date(today.getFullYear(), today.getMonth() + 1,0)
                      }
                  }
                },
                {
                    $group: {
                        _id: "$category",
                        total: { $sum: "$price"}
                    }
                },
            ]).exec()
        }
        
    }


}