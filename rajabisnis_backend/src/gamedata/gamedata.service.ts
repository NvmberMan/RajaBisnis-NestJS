import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GamedataService {
  constructor(private prisma: PrismaService) {}

   async GetAllData() {

    let shopData = await this.prisma.shop.findMany();

    const dataPromises = shopData.map(async (shop) => {
        const menuData = await this.prisma.menu.findMany({
            where : {shopId : shop.id}
        });

        return {
          "IdShop": shop.id,
          "name": shop.name,
          "description": shop.description,
          "menu" : menuData
        };
      });


    // Menunggu semua Promise menyelesaikan eksekusi
    const data = await Promise.all(dataPromises);

    return {data: data};
  }


}
