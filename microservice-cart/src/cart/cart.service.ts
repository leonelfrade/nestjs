import { Injectable } from '@nestjs/common';
import { CartEntity } from './cart.entity';

@Injectable()
export class CartService {

    async get_cart(data) {  
        try {
            const { shoppingCartId } = data;

            let result = await CartEntity.createQueryBuilder('cart')
            .select(['cart.shoppingCartId as shoppingCartId','SUM(cart.quantity * cart.price) as totalPrice','SUM(cart.quantity) as total_quantity'])
            .where('cart.shoppingCartId = :shoppingCartId', { shoppingCartId })
            .groupBy('cart.shoppingCartId')
            .getRawOne();

            if(result){

                result.userId = 11111111           
                const cartProducts = await CartEntity.createQueryBuilder('cart')
                .where('cart.shoppingCartId = :shoppingCartId', { shoppingCartId })
                .getMany();

                result.products = cartProducts
            }else{
                result = []
            }

            return result;

        } catch (error) {
            throw error;
        }
    }
  
    async add_product_cart(data): Promise<CartEntity> {
        try {
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
        } catch (error) {
            throw error;
        }
    }

    async del_product_cart(data) {
        try {
            const { shoppingCartId, productId } = data;
            const result = CartEntity.delete({ productId: productId, shoppingCartId : shoppingCartId})
            return result
        } catch (error) {
            throw error;
        }
    }
}
