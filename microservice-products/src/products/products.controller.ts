import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductsService } from './products.service';

@Controller()
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @EventPattern('get_products')
  get_products(){
    return this.productService.get_products()
  }

}
