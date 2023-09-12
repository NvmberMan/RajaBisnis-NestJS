import { Controller, Get, Param } from '@nestjs/common';
import { GamedataService } from './gamedata.service';

@Controller('gamedata')
export class GamedataController {
  constructor(private readonly gamedataService: GamedataService) {}


  @Get()
  GetAllData(){
    return this.gamedataService.GetAllData();
  }

  @Get('/version/:idVersion')
  GetUpdateVersion(@Param('idVersion')idVersion:string){
    return this.gamedataService.GetUpdateVersion(idVersion);
  }

  
}
