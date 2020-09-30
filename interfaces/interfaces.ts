export interface IPost{
    title:string,
    body:string,
    id:number
}

export interface IComment{
    postId:number,
    id:number,
    body:string
}
