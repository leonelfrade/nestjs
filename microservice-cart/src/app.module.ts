import { Module } from '@nestjs/common';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [CartModule,TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
