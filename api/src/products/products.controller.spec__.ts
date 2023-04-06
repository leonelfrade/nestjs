import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

class MockConfigService {
  get(key: string): any {
    switch (key) {
      case 'MSPRODUCTSHOST':
        return '127.0.0.1';
      case 'MSPRODUCTSPORT':
        return 4444;
      default:
        return undefined;
    }
  }
}

describe('ProductsService', () => {
  let productsService: ProductsService;
  let app: TestingModule
  beforeEach(async () => {
    app = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService,
        { provide: ConfigService, useClass: MockConfigService },
      ],
    }).compile();

    productsService = app.get<ProductsService>(ProductsService);
  });

 
/*
  describe('root', () => {
    it('should return an array"', async () => {
      const observable  = await productsService.get_products();
      const result = await firstValueFrom(observable);
      expect(Array.isArray(result)).toBe(true);
    });
  });

  afterEach(async () => {
    await app.close();
  });
*/
});
