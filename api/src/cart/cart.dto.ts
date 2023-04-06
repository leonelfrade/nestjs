import { IsNotEmpty,IsNumber,IsDecimal, IsInt } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';

export class CartRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    shoppingCartId: Number;
}

export class AddProductCartRequest{
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    shoppingCartId: number

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    productId: number

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    price: number

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    quantity: number
}

export class DelProductCartRequest{
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    shoppingCartId: number
    
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    productId: number
}