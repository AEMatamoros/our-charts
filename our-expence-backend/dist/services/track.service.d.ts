import { Product } from "src/schemas/product.schama";
import { TrackRepository } from "src/repositories/track.repository";
export declare class TrackService {
    private readonly productRepository;
    constructor(productRepository: TrackRepository);
    getMonthTrack(data: any): Promise<Product[]>;
}
