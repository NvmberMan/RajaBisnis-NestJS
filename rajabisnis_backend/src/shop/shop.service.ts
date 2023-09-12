import { Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShopService {
  constructor(private prisma:PrismaService){}


  async create(createShopDto: CreateShopDto) {
    return await this.prisma.shop.create({
      data : createShopDto
    })
  }

 async findAll() {
    return await this.prisma.shop.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.shop.findFirst({
      where: {id: id}
    });
  }

  update(id: number, updateShopDto: UpdateShopDto) {
    return `This action updates a #${id} shop`;
  }

  remove(id: number) {
    return `This action removes a #${id} shop`;
  }
}
