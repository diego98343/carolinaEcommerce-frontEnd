import { OrderClass } from "../orderClass/order-class";

export class OrderItems {


    constructor(
       
        private id?:number,
        private imageUrl?:string,
        private name?:string,
        private reference?:string,
        private unitPrice?:BigInt,
        private quantity?:number,
        private productId?:number,
        private size?:string,
        private order?:OrderClass
     
     ){}
}
