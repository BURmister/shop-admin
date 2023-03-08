import {
   Controller,
   Get,
   Put,
   Post,
   Body,
   Patch,
   Param,
   Delete,
   HttpCode,
   UsePipes,
   ValidationPipe,
   UseGuards,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { GetUser, GetAdmin } from '../auth/decorator/user.decorator';
import { Auth } from '../auth/guard/jwt.guard';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Auth()
@Controller('users')
export class UserController {
   constructor(private userService: UserService) {}

   @Get('/me')
   getMe(@GetUser() user: any) {
      return this.userService.byId(user._id);
   }

   @HttpCode(200)
   @Put('/update')
   async updateProfile(
      @GetUser('_id') _id: Types.ObjectId,
      @Body() dto: UserDto,
   ) {
      return this.userService.updateProfile(_id, dto);
   }
}
