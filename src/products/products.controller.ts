import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common'
import { Products, ProductsService } from './products.service'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import Product from './product.entity'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll(): Promise<Products> {
    return this.productsService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<Product> {
    return this.productsService.getOne(id)
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<Product> {
    return this.productsService.remove(id)
  }

  @Patch(':id')
  update(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id') id: number,
  ): Promise<Product> {
    console.log(updateProductDto, id)
    return this.productsService.update(updateProductDto, id)
  }
}
