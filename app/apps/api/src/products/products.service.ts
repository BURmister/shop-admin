import {
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import * as argon from 'argon2';

import { ProductsModel } from './products.model';
import { ProductsDto } from './products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(ProductsModel)
    private readonly ProductsModel: ModelType<ProductsModel>,
  ) {}

  async getAll() {
    const products = await this.ProductsModel.find().exec();

    return products;
  }

  async getById(_id: Types.ObjectId) {
    const product = await this.ProductsModel.findOne({ _id }, '-__v');
    if (!product) throw new UnauthorizedException('Product not found');

    return product;
  }

  async addOne(dto: ProductsDto) {
    const newProduct = new this.ProductsModel(dto);
    const product = await newProduct.save();
    return product.name;
  }

  async editOne(_id: Types.ObjectId, dto: ProductsDto) {
    const product = await this.getById(_id);

    if (dto.key) {
      product.key = dto.key;
    }

    if (dto.name) {
      product.name = dto.name;
    }

    if (dto.img) {
      product.img = dto.img;
    }

    if (dto.description) {
      product.description = dto.description;
    }

    if (dto.price) {
      product.price = dto.price;
    }

    if (dto.gender) {
      product.gender = dto.gender;
    }

    if (dto.category) {
      product.category = dto.category;
    }

    if (dto.producer) {
      product.producer = dto.producer;
    }

    if (dto.size) {
      product.size = dto.size;
    }

    if (dto.amount) {
      product.amount = dto.amount;
    }

    await product.save();
    return product.name;
  }

  async deleteOne(_id: Types.ObjectId) {
    const product = await this.getById(_id);
    await product.deleteOne();
    return product.name;
  }
}
