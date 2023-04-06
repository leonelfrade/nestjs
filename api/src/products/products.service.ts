import { Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { ConfigService } from '@nestjs/config';

@Injectable({})
export class ProductsService{
    ms_products: ClientProxy;
    constructor(private readonly configService: ConfigService){ 

        const MSPRODUCTSHOST = this.configService.get<string>('MSPRODUCTSHOST');
        const MSPRODUCTSPORT = this.configService.get<number>('MSPRODUCTSPORT');

        this.ms_products = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
              host: MSPRODUCTSHOST,
              port: MSPRODUCTSPORT,
            },
        });
    }

    get_products(){
        return this.ms_products.send('get_products', "")
    }
}