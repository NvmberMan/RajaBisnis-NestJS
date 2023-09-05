import { ShopEntity } from "../entities/shop.entity";
declare const CreateShopDto_base: import("@nestjs/mapped-types").MappedType<Omit<ShopEntity, "id">>;
export declare class CreateShopDto extends CreateShopDto_base {
}
export {};
