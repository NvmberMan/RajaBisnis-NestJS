import {Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MenuService } from './menu.service';
import {tb_menu} from '@prisma/client';

@Controller('menu')
export class MenuController {
    constructor(private menuService:MenuService){

    }

    @Get()
    async GetAllMenu() : Promise<tb_menu[]> {
        return await this.menuService.GetAllMenu();
    }

    @Post()
    async InsertMenu(@Body() data:{name:string, description:string, level_max:number, price:number, price_multiplier:number, price_unlock:number}) : Promise<tb_menu>{
        return await this.menuService.InsertMenu(data);
    }
}
