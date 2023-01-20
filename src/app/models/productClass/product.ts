// import { FileHandle } from "../file-handle.models";
import { ProductCategory } from "../productCategoryClass/product-category";


export class Product {
    constructor(
        public productId?:number,
        public productName?:string, 
        public productReference?:string,
        public description?:string,
        public imageURl?:string,
        public dateCreated?:Date,
        public active?:boolean,
        public lastUpdated?:Date,
        public displayProduct?:boolean,
        public unitsInStock?:number,
        public productCategory?:ProductCategory,
        public productPrice?:number,
        public size?:string
        // public productImage?:FileHandle[]
    ){
        
    }
}
