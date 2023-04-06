import { IsNotEmpty,IsNumber,IsDecimal, IsInt } from "class-validator"

export class CartRequest {
    @IsNotEmpty()
    @IsNumber()
    shoppingCartId: Number;
}

export class AddProductCartRequest{
    @IsNumber()
    @IsNotEmpty()
    shoppingCartId: number

    @IsNumber()
    @IsNotEmpty()
    productId: number

    @IsNumber()
    @IsNotEmpty()
    price: number

    @IsNumber()
    @IsNotEmpty()
    quantity: number
}

export class DelProductCartRequest{
    @IsNumber()
    @IsNotEmpty()
    shoppingCartId: number
    
    @IsNumber()
    @IsNotEmpty()
    productId: number
}