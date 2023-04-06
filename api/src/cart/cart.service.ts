import { Injectable } from "@nestjs/common";
import { AddProductCartRequest, CartRequest, DelProductCartRequest } from "./cart.dto";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

@Injectable()
export class CartService{
    ms_cart: ClientProxy;
    constructor(){ 
        this.ms_cart = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
              host: '127.0.0.1',
              port: 3333,
            },
        });
    }
    
    get_cart(cartRequest:CartRequest){
        return this.ms_cart.send('get_cart', cartRequest)
    }

    add_product_cart(addProductCartRequest:AddProductCartRequest){
        return this.ms_cart.send('add_product_cart', addProductCartRequest)
    }

    del_product_cart(delProductCartRequest:DelProductCartRequest){
        return this.ms_cart.send('del_product_cart', delProductCartRequest)
    }
}