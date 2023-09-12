import { Menu as menus } from "@prisma/client";
export declare class MenuEntity implements menus {
    id: string;
    name: string;
    description: string;
    level_max: number;
    price: number;
    price_multiplier: number;
    price_unlock: number;
    income: number;
    income_multiplier: number;
    shopId: string;
    menu_display: string;
}