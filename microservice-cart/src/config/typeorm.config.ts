import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { CartEntity } from "src/cart/cart.entity";
require('dotenv').config();

const DB_HOST = process.env.DB_HOST;
const DB_PORT = parseInt(process.env.DB_PORT);
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [
    CartEntity
  ],
  synchronize: true,
}