import { Module } from '@nestjs/common';
import { MenuModule } from './menu/menu.module';
import { PrismaModule } from './prisma/prisma.module';
import { ShopModule } from './shop/shop.module';
import { GamedataModule } from './gamedata/gamedata.module';

@Module({
  imports: [MenuModule, PrismaModule, ShopModule, GamedataModule],
})
export class AppModule {}
