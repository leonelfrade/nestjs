import { Body, Controller, Delete, Get, Post, Query } from "@nestjs/common";
import { AddProductCartRequest, CartRequest, DelProductCartRequest } from "./cart.dto";
import { CartService } from "./cart.service";

@Controller('cart')
export class CartController{
    constructor(private cartService: CartService){}

    @Get()
    getCart(@Query() cartRequest: CartRequest){
        return this.cartService.get_cart(cartRequest)
    }

    @Post()
    addProduct(@Body() addProductCartRequest: AddProductCartRequest){
        return this.cartService.add_product_cart(addProductCartRequest)
      
    }

    @Delete()
    delProduct(@Body() delProductCartRequest: DelProductCartRequest){
        return this.cartService.del_product_cart(delProductCartRequest)
    }
}
