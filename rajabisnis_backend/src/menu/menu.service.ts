import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {tb_menu} from '@prisma/client'
import { InsertMenuDto } from './dto/InsertMenu.dto';

@Injectable()
export class MenuService {

constructor(private prisma:PrismaService){

}

    async GetAllMenu() : Promise<tb_menu[]>{
        return await this.prisma.tb_menu.findMany();
    }

    async InsertMenu(insertMenuDto: InsertMenuDto){
        return await this.prisma.tb_menu.create({
            data : insertMenuDto
        })
    }

    async UpdateMenu(id:string,insertMenuDto: InsertMenuDto){
        return await this.prisma.tb_menu.update({
            data : insertMenuDto,
            where : {id}
        })
    }

    async DeleteMenu(id:string){
        return await this.prisma.tb_menu.delete({
            where : {id}
        })
    }
}
