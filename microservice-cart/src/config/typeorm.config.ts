import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { CartEntity } from "src/cart/cart.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 3330,
  username: 'root',
  password: '123',
  database: 'nest',
  entities: [
    CartEntity
  ],
  synchronize: true,
}