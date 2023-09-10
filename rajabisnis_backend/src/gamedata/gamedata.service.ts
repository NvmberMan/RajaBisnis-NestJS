import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GamedataService {
  constructor(private prisma: PrismaService) {}

  async GetAllData() {
    let shopData = await this.prisma.shop.findMany();

    const dataPromises = shopData.map(async (shop) => {
      const menuData = await this.prisma.menu.findMany({
        where: { shopId: shop.id },
      });

      return {
        IdShop: shop.id,
        name: shop.name,
        description: shop.description,
        menu: menuData,
      };
    });

    // Menunggu semua Promise menyelesaikan eksekusi
    const data = await Promise.all(dataPromises);

    return { data: data };
  }

  async GetUpdateVersion(idVersion: string) {
    const idVersionInt = parseInt(idVersion);

    // Ambil nilai tertinggi dari 'id' di tabel 'versionUpdate'
    const highestIdVersion = await this.prisma.versionUpdate.findFirst({
      orderBy: {
        id: 'desc', // Mengurutkan berdasarkan 'id' secara descending (tertinggi dulu)
      },
      select: {
        id: true,
        update_name: true
      },
    });

    if (!highestIdVersion) {
      // Jika tidak ada data di tabel, Anda bisa mengembalikan pesan yang sesuai.
      return 'Tidak ada data versi saat ini.';
    }

    // Membandingkan 'idVersion' dengan 'id' tertinggi
    if (idVersionInt >= highestIdVersion.id) {
      return {
        message: 'Sudah versi terbaru',
        current_version: idVersion,
        update: false,
      };
    } else {
      return { message: 'Anda perlu update ke versi terbaru', 
      current_version: idVersion,
      new_version: highestIdVersion,
      update: true };
    }
  }
}
