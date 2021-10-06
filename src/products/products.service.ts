import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateProductDto } from './dto/create-product.dto'
import Product from './product.entity'

export type Products = Array<CreateProductDto>

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  private products: Products = []

  getAll(): Products {
    return this.products
  }

  getOne(id: number): CreateProductDto {
    return this.products.find((p) => p.id === id)
  }

  create(productDto: CreateProductDto) {
    this.products.push({
      ...productDto,
      id: new Date().getMilliseconds(),
    })
    return this.products
  }

  async createProduct(productDto: CreateProductDto): Promise<Product> {
    const newProduct = await this.productsRepository.create(productDto)
    await this.productsRepository.save(newProduct)
    return newProduct
  }
}
