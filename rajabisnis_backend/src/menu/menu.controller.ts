import {Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';
import { InsertMenuDto } from './dto/InsertMenu.dto';

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
}
