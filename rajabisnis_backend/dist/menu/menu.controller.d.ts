/// <reference types="multer" />
import { MenuService } from './menu.service';
import { InsertMenuDto } from './dto/InsertMenu.dto';
import { Response } from 'express';
export declare const storage: {
    storage: import("multer").StorageEngine;
    fileFilter: (req: any, file: any, callback: any) => any;
};
export declare class MenuController {
    private menuService;
    constructor(menuService: MenuService);
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
    viewImage(imageName: string, res: Response): Promise<void>;
}
