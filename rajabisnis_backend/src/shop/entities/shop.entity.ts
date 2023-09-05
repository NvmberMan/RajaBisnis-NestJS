import { Shop } from "@prisma/client";

export class ShopEntity implements Shop {
    id: string;
    name: string;
    description: string;
}
