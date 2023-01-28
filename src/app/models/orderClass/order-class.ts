import { Address } from "src/app/common/address";
import { Costumer } from "src/app/common/costumer";
import { OrderItems } from "src/app/common/order-items";

export class OrderClass {

    constructor(
        public orderId: number,
        public totalQuantity:number,
        public totalPrice:number,
        public dataCreated:Date,
        public lastUpdated:Date,
        public orderitems:OrderItems[],
        public customer:Costumer,
        public shippingAddres:Address,
        public billingAddress:Address
       
     ){}
}
