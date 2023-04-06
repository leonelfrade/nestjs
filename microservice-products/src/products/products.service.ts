import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService implements OnModuleInit {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}
    // onModuleInit() is executed before the app bootstraped
    async onModuleInit() {
        try {
            const res = await this.productModel.find().exec() 
            if (res.length == 0) {
                for (let index = 1; index <= 100; index++) {
                    
                    const createdProduct = new this.productModel({
                        productId: index,
                        price: (Math.random() * 999).toFixed(2)
                    });
                    createdProduct.save();
                }
            }
        } 
        catch (error) {
            throw error;
        }
    }

    async get_products(): Promise<Product[]> {
        return this.productModel.find({}, { _id: 0,__v: 0 }).exec();
    }

    async add_products() {   
        const createdProduct = new this.productModel({
            productId: 1,
            price:1.12
        });
        return createdProduct.save();
    }

    async del_products() {   
        const createdProduct = new this.productModel({
            productId: 1,
            price:1.12
        });
        return createdProduct.save();
    }
  
}
