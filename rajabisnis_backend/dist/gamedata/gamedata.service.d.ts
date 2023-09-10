import { PrismaService } from 'src/prisma/prisma.service';
export declare class GamedataService {
    private prisma;
    constructor(prisma: PrismaService);
    GetAllData(): Promise<{
        data: {
            IdShop: string;
            name: string;
            description: string;
            menu: {
                id: string;
                name: string;
                description: string;
                level_max: number;
                price: number;
                price_multiplier: number;
                price_unlock: number;
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
}
