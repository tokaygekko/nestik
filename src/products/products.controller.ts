import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Products, ProductsService } from './products.service'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll(): Products {
    return this.productsService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return this.productsService.getOne(id)
  }

  @Post()
  // @HttpCode(HttpStatus.CREATED)
  // @Header('cache-control', 'none')
  create(@Body() createProductDto: CreateProductDto): Products {
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
