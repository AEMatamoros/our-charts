import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductService } from './services/product.service';
import { ProductController } from './controllers/product.controller';

describe('AppController', () => {
  let appController: AppController;
  let productController: ProductController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController, ProductController],
      providers: [ProductService, ProductService],
    }).compile();

    productController = app.get<ProductController>(ProductController);
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Bienvenido a la API de Our Expences!"', () => {
      expect(appController.getHello()).toBe('Bienvenido a la API de Our Expences!');
    });
  });

  describe('Product Repository', () =>{
    it('should return porducts Array', () => {
      expect(productController.getProduct()).toBe([]);
    });
  })
});
