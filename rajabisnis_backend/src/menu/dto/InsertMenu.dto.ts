import { OmitType } from "@nestjs/mapped-types";
import { MenuEntity } from "../entities/menu.entity";

export class InsertMenuDto extends OmitType(MenuEntity, ['id']){

}