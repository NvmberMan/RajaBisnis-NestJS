import { MenuService } from './menu.service';
import { tb_menu } from '@prisma/client';
export declare class MenuController {
    private menuService;
    constructor(menuService: MenuService);
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
