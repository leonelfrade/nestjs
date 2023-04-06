import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { CartService } from './cart.service';

@Controller()
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @EventPattern('get_cart')
  get_cart(data){
    return this.cartService.get_cart(data)
  }

  @EventPattern('add_product_cart')
  add_product_cart(data){
    return this.cartService.add_product_cart(data)
  }


  @EventPattern('del_product_cart')
  del_product_cart(data){
    return this.cartService.del_product_cart(data)
  }
}
