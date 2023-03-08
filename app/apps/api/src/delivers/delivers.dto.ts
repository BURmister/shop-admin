import { IsOptional, IsString } from 'class-validator';

export class DeliversDto {
  @IsString()
  @IsOptional()
  key: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  from: string;

  @IsString()
  @IsOptional()
  begging: string;

  @IsString()
  @IsOptional()
  ending: string;

  @IsOptional()
  products: {
    productKey: string;

    productName: string;

    amount: number;

    price: string;

    productDescription: string;

    gender: string;

    category: string;

    producer: string;

    sizes: string[];

    img: string;
  }[];
}
