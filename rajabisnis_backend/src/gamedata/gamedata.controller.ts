import { Controller, Get } from '@nestjs/common';
import { GamedataService } from './gamedata.service';

@Controller('gamedata')
export class GamedataController {
  constructor(private readonly gamedataService: GamedataService) {}


  @Get()
  GetAllData(){
    return this.gamedataService.GetAllData();
  }
}
