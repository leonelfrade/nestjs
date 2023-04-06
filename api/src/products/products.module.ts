import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ConfigModule } from '@nestjs/config';

@Module({
    controllers:[ProductsController],
    providers:[ProductsService]
})
export class ProductsModule {}
