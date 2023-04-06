import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

require('dotenv').config();
const HOST = process.env.DB_HOST
const PORT = parseInt(process.env.DB_PORT)
const USER = process.env.DB_USERNAME
const PASS = process.env.DB_PASSWORD

@Module({
  imports: [ProductsModule,
    MongooseModule.forRoot(`mongodb://${HOST}:${PORT}/products`,{
      user: USER,
      pass: PASS,
      authSource: 'admin',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })],
})
export class AppModule {}
