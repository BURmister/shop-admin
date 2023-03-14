import {
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types, isValidObjectId } from 'mongoose';
import * as argon from 'argon2';

import { DeliversModel } from './delivers.model';
import { DeliversDto } from './delivers.dto';
import { ProductsModel } from 'src/products/products.model';

@Injectable()
export class DeliversService {
  constructor(
    @InjectModel(DeliversModel)
    private readonly DeliversModel: ModelType<DeliversModel>,
    @InjectModel(ProductsModel)
    private readonly ProductsModel: ModelType<ProductsModel>,
  ) {}

  async getAll(searchTerm?: string | Types.ObjectId) {
    if (searchTerm) {
      if (isValidObjectId(searchTerm)) {
        return this.DeliversModel.find({
          $or: [
            {
              _id: searchTerm,
            },
          ],
        }).exec();
      } else {
        return this.DeliversModel.find({
          $or: [
            {
              deliveryName: new RegExp(String(searchTerm), 'i'),
            },
            {
              from: new RegExp(String(searchTerm), 'i'),
            },
          ],
        }).exec();
      }
    }
    const delivery = await this.DeliversModel.find().exec();
    return delivery;
  }

  async getById(_id: Types.ObjectId) {
    const deliver = await this.DeliversModel.findOne({ _id }, '-__v');
    if (!deliver) throw new UnauthorizedException('Product not found');

    return deliver;
  }

  async addOne(dto: DeliversDto) {
    const newProduct = new this.DeliversModel(dto);
    const deliver = await newProduct.save();
    return deliver._id;
  }

  async editOne(_id: Types.ObjectId, dto: DeliversDto) {
    const deliver = await this.getById(_id);

    if (dto.deliveryKey) {
      deliver.deliveryKey = dto.deliveryKey;
    }

    if (dto.deliveryName) {
      deliver.deliveryName = dto.deliveryName;
    }

    if (dto.deliveryDescription) {
      deliver.deliveryDescription = dto.deliveryDescription;
    }

    if (dto.from) {
      deliver.from = dto.from;
    }

    if (dto.products) {
      deliver.products = dto.products;
    }

    await deliver.save();
    return deliver._id;
  }

  async deleteOne(_id: Types.ObjectId) {
    const deliver = await this.getById(_id);
    await deliver.deleteOne();
    return deliver._id;
  }

  async completeOne(_id: Types.ObjectId) {
    const deliver = await this.getById(_id);
    const newProducts = await deliver.products;

    await newProducts.forEach(async (newProduct) => {
      const product = await new this.ProductsModel(newProduct);
      await product.save();
    });

    await deliver.deleteOne();
    return deliver.deliveryName;
  }
}
