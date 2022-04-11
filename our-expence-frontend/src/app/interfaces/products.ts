export interface GetProduct {
    _id:number,
    name:string,
    price:number,
    category:string
}
export interface PostProduct {
    name:string,
    price:number,
    category:string
}

export interface PutProduct {
    id:number,
    _id?:number,
    name?:string,
    price?:number,
    category?:string
}