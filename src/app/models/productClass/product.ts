import { ProductCategory } from "../productCategoryClass/product-category";


export class Product {
    constructor(
        public productId?:number,
        public productName?:string, 
        public description?:string,
        public imageUrl?:string,
        public dateCreated?:Date,
        public active?:boolean,
        public lastUpdated?:Date,
        public unitsInStock?:number,
        public productCategory?:ProductCategory,
        public productPrice?:number,
        public attachmentFile?:File
    ){
        
    }
}
