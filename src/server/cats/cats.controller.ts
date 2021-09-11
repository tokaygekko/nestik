import { Controller, Get } from '@nestjs/common'

@Controller('cats')
export class CatsController {
  @Get()
  index(): string {
    return 'all cats'
  }

  @Get('male')
  maleIndex(): string {
    return 'male cats2'
  }
}
