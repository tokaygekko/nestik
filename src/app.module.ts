import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { Connection } from 'typeorm'
import * as Joi from '@hapi/joi'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductsModule } from './products/products.module'
import { CatsController } from './cats/cats.controller'
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [
    ProductsModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    DatabaseModule,
  ],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
