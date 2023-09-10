import { Module } from '@nestjs/common';
import { GamedataService } from './gamedata.service';
import { GamedataController } from './gamedata.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [GamedataController],
  providers: [GamedataService, PrismaService]
})
export class GamedataModule {}
