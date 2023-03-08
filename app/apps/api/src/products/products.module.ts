import { TypegooseModule } from 'nestjs-typegoose';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsModel } from 'src/products/products.model';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ProductsModel,
        schemaOptions: {
          collection: 'products',
        },
      },
    ]),
    ConfigModule,
  ],
})
export class ProductsModule {}
