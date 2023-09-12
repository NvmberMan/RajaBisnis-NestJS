import { OmitType } from "@nestjs/mapped-types";
import { ShopEntity } from "../entities/shop.entity";

export class CreateShopDto extends OmitType(ShopEntity, ['id']){}
