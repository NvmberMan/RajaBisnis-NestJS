import { MenuEntity } from "../entities/menu.entity";
declare const InsertMenuDto_base: import("@nestjs/mapped-types").MappedType<Omit<MenuEntity, "id">>;
export declare class InsertMenuDto extends InsertMenuDto_base {
}
export {};
