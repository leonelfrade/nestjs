import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './app.module';

describe('Teste Routes', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/products (GET)', () => {
    return request(app.getHttpServer())
      .get('/products')
      .expect(200)
  });

  it('/cart (GET)', () => {

    const queryParams = {
      shoppingCartId: 1,
    };

    return request(app.getHttpServer())
      .get('/cart')
      .query(queryParams)
      .expect(200)
  });


  it('/cart (POST)', () => {
    const body = {
      "shoppingCartId":1,
      "productId":142,
      "price":18.12,
      "quantity":2
    }

    return request(app.getHttpServer())
      .post('/cart')
      .send(body)
      .expect(201)   
  });
});
