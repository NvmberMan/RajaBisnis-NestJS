import { Shop } from "@prisma/client";

export class ShopEntity implements Shop {
    id: string;
    name: string;
    description: string;
    price: number;
    prefab_path: string;
    shop_display: string;
    banner_display: string;
}
