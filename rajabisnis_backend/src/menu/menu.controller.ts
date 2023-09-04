import { Controller, Get, Param, Post } from '@nestjs/common';
import { MenuService } from './menu.service';


@Controller('menu')
export class MenuController {
    constructor(private menuService:MenuService){

    }

    @Get('/:id')
    GetAllMenu(@Param('id') id:string) {
        return this.menuService.GetAllMenu();
    }
}
