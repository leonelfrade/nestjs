import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:4440/products',{
      user: 'root',
      pass: '123',
      authSource: 'admin',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })],
})
export class AppModule {}
