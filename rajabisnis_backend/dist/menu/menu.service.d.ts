import { PrismaService } from 'src/prisma/prisma.service';
import { tb_menu } from '@prisma/client';
import { InsertMenuDto } from './dto/InsertMenu.dto';
export declare class MenuService {
    private prisma;
    constructor(prisma: PrismaService);
    GetAllMenu(): Promise<tb_menu[]>;
    InsertMenu(insertMenuDto: InsertMenuDto): Promise<{
        id: string;
        name: string;
        description: string;
        level_max: number;
        price: number;
        price_multiplier: number;
        price_unlock: number;
        shopId: string;
    }>;
    UpdateMenu(id: string, insertMenuDto: InsertMenuDto): Promise<{
        id: string;
        name: string;
        description: string;
        level_max: number;
        price: number;
        price_multiplier: number;
        price_unlock: number;
        shopId: string;
    }>;
    DeleteMenu(id: string): Promise<{
        id: string;
        name: string;
        description: string;
        level_max: number;
        price: number;
        price_multiplier: number;
        price_unlock: number;
        shopId: string;
    }>;
}
