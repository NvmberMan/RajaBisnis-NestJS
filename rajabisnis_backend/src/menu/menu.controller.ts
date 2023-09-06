import {Body, Controller, Get, Param, Post, Put, Delete, UseInterceptors, UploadedFile, Res, BadRequestException } from '@nestjs/common';
import { MenuService } from './menu.service';
import { InsertMenuDto } from './dto/InsertMenu.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from  'path';
import { Response } from 'express';
import * as fs from 'fs';

export const storage = {
    storage: diskStorage({
        destination: './imagedata/menu/',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
      fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
          return callback(new BadRequestException('Only image files are allowed!'), false);
        }
        callback(null, true);
      },
  };

@Controller('menu')
export class MenuController {
    constructor(private menuService:MenuService){

    }

    @Get()
    async GetAllMenu() {
        return await this.menuService.GetAllMenu();
    }

    
    @Get('/:shopId')
    async GetMenu(@Param('shopId')shopId:string) {
        return await this.menuService.GetMenu(shopId);
    }

    @Post()
    InsertMenu(@Body() insertMenuDto: InsertMenuDto){
        return this.menuService.InsertMenu(insertMenuDto);
    }

    @Put('/:id')
    UpdateMenu(@Param('id') id:string ,@Body() insertMenuDto: InsertMenuDto){
        return this.menuService.UpdateMenu(id,insertMenuDto);
    }

    
    @Delete('/:id')
    DeleteMenu(@Param('id') id:string){
        return this.menuService.DeleteMenu(id);
    }

    @Get('/image/:imageName')
    async viewImage(@Param('imageName') imageName:string, @Res() res: Response){
        const imagePath = `./imagedata/menu/${imageName}`;
        const imageStream = fs.createReadStream(imagePath);

        imageStream.pipe(res);
    }

    @Post('/upload')
    @UseInterceptors(
      FileInterceptor('file', storage),
    )
    uploadFile(@UploadedFile() file) {
        if (!file) {
            // Jika tidak ada file yang diunggah
            throw new Error('No file uploaded');
          }
      console.log(file);
      return { imagePath: file.path };
    }
  
}
