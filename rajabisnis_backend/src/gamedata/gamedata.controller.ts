import { Controller, Get, Param, Res } from '@nestjs/common';
import { GamedataService } from './gamedata.service';
import { Response } from 'express';
import * as fs from 'fs';

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

  
  @Get('/image/:imageName')
  viewImage(@Param('imageName') imageName:string, @Res() res: Response){
       const imagePath = `./imagedata/menu/${imageName}`;
       const loadingPath = `./imagedata/menu/loading2.gif`;
           // Periksa apakah file ada
       fs.access(imagePath, fs.constants.F_OK, (err) => {
         if (err) {
             // Jika file tidak ditemukan, kirim respons 404 Not Found

             const imageStream = fs.createReadStream(loadingPath);
             imageStream.pipe(res);
             //res.status(404).send('File not found');
         } else {
             // Jika file ditemukan, kirimkan file ke respons
             const imageStream = fs.createReadStream(imagePath);
             imageStream.pipe(res);
     }
 });
   }
}
