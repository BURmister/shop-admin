import {
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import * as argon from 'argon2';

import { UserModel } from './user.model';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>,
  ) {}

  async getAll() {
    const users = await this.UserModel.find().exec();
    return users;
  }

  async byId(_id: Types.ObjectId) {
    const user = await this.UserModel.findById(_id, '-hash -__v');
    if (!user) throw new UnauthorizedException('user not found');

    return user;
  }

  async updateProfile(_id: Types.ObjectId, dto: UserDto) {
    const user = await this.byId(_id);
    const isSameUser = await this.UserModel.findOne({
      email: dto.name,
    });

    if (isSameUser && String(_id) !== String(isSameUser._id))
      throw new NotFoundException('email is busy');

    if (dto.role) {
      user.role = dto.role;
    }

    if (dto.password) {
      const hash = await argon.hash(dto.password);
      user.hash = hash;
    }

    if (dto.firstName) {
      user.firstName = dto.firstName;
    }

    if (dto.secondName) {
      user.secondName = dto.secondName;
    }

    if (dto.description) {
      user.description = dto.description;
    }

    await user.save();
    return 'user has been changed';
  }
}
