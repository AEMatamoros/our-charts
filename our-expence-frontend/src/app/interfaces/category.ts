export interface GetCategory{
    _id:number,
    name:string,
    max:number,
    icon:string
}

export interface PostCategory{
    name:string,
    max:number,
    icon:string
}

export interface PutCategory{
    id?:number,
    _id:number,
    name:string,
    max:number,
    icon:string
}