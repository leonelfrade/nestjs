import { Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

@Injectable({})
export class ProductsService{
    ms_products: ClientProxy;
    constructor(){ 
        this.ms_products = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
              host: '127.0.0.1',
              port: 4444,
            },
        });
    }

    get_products(){
        return this.ms_products.send('get_products', "")
    }
}