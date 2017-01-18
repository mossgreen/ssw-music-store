export class Album{
    albumId:number;
    title:string;
    price:number;
    albumArtUrl:string;
    created:Date;
    
}

export class Genre{
    id:number;
    name:string;
    description:string;
    albums:string;
}

/**
 * we have a Cart with a number of CartItems inside it. 
 * Each cart item links to one album and has a quantity. 
 */

export class CartItem {
    album: Album;
    count: number;
    cartId: number;
    dateCreated: Date;
    albumId: number;
}

export class Cart {
    cartItems: CartItem[];
    cartTotal: number;
}