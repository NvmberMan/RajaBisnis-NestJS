import { PrismaService } from 'src/prisma/prisma.service';
import { InsertMenuDto } from './dto/InsertMenu.dto';
export declare class MenuService {
    private prisma;
    constructor(prisma: PrismaService);
    GetAllMenu(): Promise<{
        id: string;
        name: string;
        description: string;
        level_max: number;
        price: number;
        price_multiplier: number;
        price_unlock: number;
        income: number;
        income_multiplier: number;
        menu_display: string;
        shopId: string;
    }[]>;
    GetMenu(shopId: string): Promise<{
        id: string;
        name: string;
        description: string;
        level_max: number;
        price: number;
        price_multiplier: number;
        price_unlock: number;
        income: number;
        income_multiplier: number;
        menu_display: string;
        shopId: string;
    }>;
    InsertMenu(insertMenuDto: InsertMenuDto, file: any): Promise<{
        id: string;
        name: string;
        description: string;
        level_max: number;
        price: number;
        price_multiplier: number;
        price_unlock: number;
        income: number;
        income_multiplier: number;
        menu_display: string;
        shopId: string;
    } | {
        message: any;
    }>;
    UpdateMenu(id: string, insertMenuDto: InsertMenuDto, file: any): Promise<{
        id: string;
        name: string;
        description: string;
        level_max: number;
        price: number;
        price_multiplier: number;
        price_unlock: number;
        income: number;
        income_multiplier: number;
        menu_display: string;
        shopId: string;
    } | {
        message: string;
    }>;
    DeleteMenu(id: string): Promise<{
        id: string;
        name: string;
        description: string;
        level_max: number;
        price: number;
        price_multiplier: number;
        price_unlock: number;
        income: number;
        income_multiplier: number;
        menu_display: string;
        shopId: string;
    }>;
}
