import { ProductCategory } from "./productCategoryModel/product-category";

export class ProductClass {
    constructor(
        public productId?: number,
        public productName?:string,
        public description?:string,
        public category?: ProductCategory
       ){}
}
