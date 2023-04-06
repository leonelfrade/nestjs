import { Injectable } from '@nestjs/common';
import { CartEntity } from './cart.entity';

@Injectable()
export class CartService {

    async get_cart(data) {  
        const { shoppingCartId } = data;

        const result = await CartEntity.createQueryBuilder('cart')
        .select(['cart.shoppingCartId','SUM(cart.quantity * cart.price) as totalPrice','SUM(cart.quantity) as total_quantity'])
        .where('cart.shoppingCartId = :shoppingCartId', { shoppingCartId })
        .groupBy('cart.shoppingCartId')
        .getRawOne();

        result.userid = 11111111
        
       


        const cartProducts = await CartEntity.createQueryBuilder('cart')
        .where('cart.shoppingCartId = :shoppingCartId', { shoppingCartId })
        .getMany();

        result.products = cartProducts


        return result;
    }
  
    async add_product_cart(data): Promise<CartEntity> {
        const { shoppingCartId, productId, price,quantity } = data;
        let cartEntity: CartEntity = CartEntity.create();
        const cartExist: CartEntity = await CartEntity.findOne({where: {shoppingCartId: data.shoppingCartId, productId: productId}});
        if(cartExist){
            const result = await CartEntity.update({ shoppingCartId, productId }, { quantity: cartExist.quantity + quantity });
            cartEntity = await CartEntity.findOne({where: {shoppingCartId: data.shoppingCartId, productId: productId}});
        }else{           
            cartEntity.shoppingCartId = shoppingCartId;
            cartEntity.userId = 11111111;
            cartEntity.productId = productId
            cartEntity.price = price
            cartEntity.quantity = quantity
            await CartEntity.save(cartEntity);         
        }   
        return cartEntity
    }

    async del_product_cart(data) {
        const { shoppingCartId, productId } = data;
        const result = CartEntity.delete({ productId: productId, shoppingCartId : shoppingCartId})
        return result
    }
}
