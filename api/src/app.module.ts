import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { AuthModel } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModel, 
    CartModule, 
    ProductsModule
  ]
})
export class AppModule {}
