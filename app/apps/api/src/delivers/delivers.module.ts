import { TypegooseModule } from 'nestjs-typegoose';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DeliversController } from './delivers.controller';
import { DeliversService } from './delivers.service';
import { DeliversModel } from 'src/delivers/delivers.model';
import { ProductsModel } from 'src/products/products.model';

@Module({
  controllers: [DeliversController],
  providers: [DeliversService],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: DeliversModel,
        schemaOptions: {
          collection: 'delivers',
        },
      },
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
export class DeliversModule {}
