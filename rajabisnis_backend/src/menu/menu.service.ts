import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {tb_menu} from '@prisma/client'

@Injectable()
export class MenuService {

constructor(private prisma:PrismaService){

}

    async GetAllMenu() : Promise<tb_menu[]>{
        return await this.prisma.tb_menu.findMany();
    }

    async InsertMenu(data: {name:string, description:string, level_max:number, price:number, price_multiplier:number, price_unlock:number}) : Promise<tb_menu>{
        return await this.prisma.tb_menu.create({data})
    }
}
