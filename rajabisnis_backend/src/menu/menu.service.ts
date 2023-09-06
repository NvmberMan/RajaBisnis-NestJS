import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertMenuDto } from './dto/InsertMenu.dto';

@Injectable()
export class MenuService {

constructor(private prisma:PrismaService){

}

    async GetAllMenu(){
        return await this.prisma.menu.findMany();
    }

    async GetMenu(shopId:string){
        return await this.prisma.menu.findFirst({
            where : {
                shopId: shopId
            }
        });
    }

    async InsertMenu(insertMenuDto: InsertMenuDto){
        return await this.prisma.menu.create({
            data : insertMenuDto
        })
    }

    async UpdateMenu(id:string,insertMenuDto: InsertMenuDto){
        return await this.prisma.menu.update({
            data : insertMenuDto,
            where : {id}
        })
    }

    async DeleteMenu(id:string){
        return await this.prisma.menu.delete({
            where : {id}
        })
    }
}
