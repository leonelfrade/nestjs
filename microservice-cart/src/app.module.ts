import { Module } from '@nestjs/common';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartModule } from './cart/cart.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [  
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CartModule,
    TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
