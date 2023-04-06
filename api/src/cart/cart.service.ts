import { Injectable } from "@nestjs/common";
import { AddProductCartRequest, CartRequest, DelProductCartRequest } from "./cart.dto";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CartService{
    ms_cart: ClientProxy;
    constructor(private readonly configService: ConfigService){ 
       
        const MSCARTHOST = this.configService.get<string>('MSCARTHOST');
        const MSCARTPORT = this.configService.get<number>('MSCARTPORT');
   
        this.ms_cart = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
              host: MSCARTHOST,
              port: MSCARTPORT,
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