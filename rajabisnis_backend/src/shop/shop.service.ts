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

  async update(id: string, updateShopDto: UpdateShopDto) {


    const existingShop = await this.prisma.shop.findUnique({
      where : {id}
  });

    //mengecek apakah id yang ingin di update ada
    if(!existingShop)
    { 
      return 'ID SALAH ANJG';
    }
    return await this.prisma.shop.update({
      data: updateShopDto,
      where: {id: id}
    })
  }

  async remove(id: string) {
    return await this.prisma.shop.delete({
      where: {id: id}
    });
  }
}
