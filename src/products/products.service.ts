import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

export type Products = Array<CreateProductDto>;

@Injectable()
export class ProductsService {
  private products: Products = [];

  getAll(): Products {
    return this.products;
  }

  getOne(id: string): string {
    return id;
  }

  create(productDto: CreateProductDto) {
    this.products.push({
      ...productDto,
      id: Date.now().toString(),
    });
    return this.products;
  }
}
