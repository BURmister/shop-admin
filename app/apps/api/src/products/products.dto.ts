import { IsOptional, IsString } from 'class-validator';

export class ProductsDto {
  @IsString()
  @IsOptional()
  key: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  amount: number;

  @IsString()
  @IsOptional()
  price: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  gender: string;

  @IsString()
  @IsOptional()
  category: string;

  @IsString()
  @IsOptional()
  producer: string;

  @IsString()
  @IsOptional()
  sizes: string[];

  @IsString()
  @IsOptional()
  img: string;
}
