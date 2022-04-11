import { Product } from "src/schemas/product.schama";
import { TrackRepository } from "src/repositories/track.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TrackService{
    constructor(private readonly productRepository: TrackRepository){}

    async getMonthTrack(data:any): Promise<Product[]>{
        return this.productRepository.findMonthTrack(data)
    }
    
}