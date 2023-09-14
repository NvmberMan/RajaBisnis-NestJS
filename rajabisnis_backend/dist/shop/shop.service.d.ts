import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ShopService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createShopDto: CreateShopDto): Promise<{
        id: string;
        name: string;
        description: string;
        price: number;
        prefab_path: string;
        shop_display: string;
        banner_display: string;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        description: string;
        price: number;
        prefab_path: string;
        shop_display: string;
        banner_display: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        description: string;
        price: number;
        prefab_path: string;
        shop_display: string;
        banner_display: string;
    }>;
    update(id: string, updateShopDto: UpdateShopDto): Promise<{
        id: string;
        name: string;
        description: string;
        price: number;
        prefab_path: string;
        shop_display: string;
        banner_display: string;
    } | "ID SALAH ANJG">;
    remove(id: string): Promise<{
        id: string;
        name: string;
        description: string;
        price: number;
        prefab_path: string;
        shop_display: string;
        banner_display: string;
    }>;
}
