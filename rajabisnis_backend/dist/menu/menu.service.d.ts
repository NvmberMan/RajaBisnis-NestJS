import { PrismaService } from 'src/prisma/prisma.service';
import { tb_menu } from '@prisma/client';
export declare class MenuService {
    private prisma;
    constructor(prisma: PrismaService);
    GetAllMenu(): Promise<tb_menu[]>;
    InsertMenu(data: {
        name: string;
        description: string;
        level_max: number;
        price: number;
        price_multiplier: number;
        price_unlock: number;
    }): Promise<tb_menu>;
}
