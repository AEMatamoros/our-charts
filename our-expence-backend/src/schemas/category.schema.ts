import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category{

    @Prop()
    name:string;

    @Prop()
    icon:string;

    @Prop()
    max:number;

}



export const categorySchema = SchemaFactory.createForClass(Category);