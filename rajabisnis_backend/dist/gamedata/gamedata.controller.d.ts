import { GamedataService } from './gamedata.service';
import { Response } from 'express';
export declare class GamedataController {
    private readonly gamedataService;
    constructor(gamedataService: GamedataService);
    GetAllData(): Promise<{
        data: {
            IdShop: string;
            name: string;
            description: string;
            price: number;
            prefab_path: string;
            shop_display: string;
            banner_display: string;
            menu: {
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
            }[];
        }[];
    }>;
    GetUpdateVersion(idVersion: string): Promise<"Tidak ada data versi saat ini." | {
        message: string;
        current_version: string;
        update: boolean;
        new_version?: undefined;
    } | {
        message: string;
        current_version: string;
        new_version: {
            id: number;
            update_name: string;
        };
        update: boolean;
    }>;
    viewImage(imageName: string, res: Response): void;
}
