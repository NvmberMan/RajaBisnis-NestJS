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
    findOne(id: number): string;
    update(id: number, updateShopDto: UpdateShopDto): string;
    remove(id: number): string;
}
