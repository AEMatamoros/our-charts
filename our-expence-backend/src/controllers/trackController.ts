import {Body, Controller, Get, Param, Put, Post, Delete} from '@nestjs/common';

import { Product } from 'src/schemas/product.schama';
import { TrackService } from 'src/services/track.service';

@Controller('track')
export class TrackController{
    constructor(private readonly productService: TrackService){}

    @Get()
    async getmonthTrack():Promise<Product[]>{
        return this.productService.getMonthTrack();
    }

}