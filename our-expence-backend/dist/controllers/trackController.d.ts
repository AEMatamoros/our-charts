import { Product } from 'src/schemas/product.schama';
import { TrackService } from 'src/services/track.service';
export declare class TrackController {
    private readonly productService;
    constructor(productService: TrackService);
    getmonthTrack(data: {
        year: number;
        month: number;
    }): Promise<Product[]>;
}
