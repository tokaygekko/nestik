import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import Product from './product.entity'

export type Products = Array<CreateProductDto>

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async getAll(): Promise<Products> {
    return this.productsRepository.find()
  }

  async getOne(id: number): Promise<Product> {
    return await this.productsRepository.findOne(id)
  }

  async create(productDto: CreateProductDto): Promise<Product> {
    const newProduct = await this.productsRepository.create(productDto)
    await this.productsRepository.save(newProduct)
    return newProduct
  }

  async remove(id: number): Promise<Product> {
    const product = await this.productsRepository.findOne(id)
    const deleteResponse = await this.productsRepository.delete(id)
    if (!deleteResponse.affected) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND)
    }
    return product
  }

  async update(productDto: UpdateProductDto, id: number) {
    await this.productsRepository.update(id, productDto)
    const updatedPost = await this.productsRepository.findOne(id)
    if (updatedPost) {
      return updatedPost
    }
    throw new HttpException('Product not found', HttpStatus.NOT_FOUND)
  }
}
