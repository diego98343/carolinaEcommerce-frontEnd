import { ProductCategory } from "./productCategoryModel/product-category";
import { ProductFile } from "./productFileModel/product-file";

export class ProductClass {
    constructor(
        public productId?: number,
        public productName?:string,
        public description?:string,
        public category?: ProductCategory,
        public file?: ProductFile
       ){}
}
