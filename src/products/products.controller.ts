import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Products, ProductsService } from './products.service'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import Product from './product.entity'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll(): Products {
    return this.productsService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: number): CreateProductDto {
    return this.productsService.getOne(id)
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Remove ${id}`
  }

  @Put(':id')
  update(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id') id: string,
  ): string {
    return `Title: ${updateProductDto.title} and price ${updateProductDto.price} aaannnd id ${id}`
  }
}
