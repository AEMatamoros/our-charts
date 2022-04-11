import {Controller, Get, Query} from '@nestjs/common';

import { Product } from 'src/schemas/product.schama';
import { TrackService } from 'src/services/track.service';

@Controller('track')
export class TrackController{
    constructor(private readonly productService: TrackService){}

    @Get()
    async getmonthTrack(@Query() data:{year:number, month:number}):Promise<Product[]>{
        return this.productService.getMonthTrack(data);
    }

}