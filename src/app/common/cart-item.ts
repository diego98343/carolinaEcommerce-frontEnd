import { Product} from "../models/productClass/product";

export class CartItem {
 
id: number | undefined =0;
name: string | undefined ='';
imageUrl: string | undefined ='';
unitPrice: number | undefined =0;

quantity: number =0;


constructor(product:Product){

    this.id=product.productId;
    this.name= product.productName;
    this.imageUrl= product.imageURl;
    this.unitPrice = product.productPrice;

    this.quantity=1;

}













}
