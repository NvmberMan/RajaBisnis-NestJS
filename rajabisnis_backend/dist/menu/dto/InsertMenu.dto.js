"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertMenuDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const menu_entity_1 = require("../entities/menu.entity");
class InsertMenuDto extends (0, mapped_types_1.OmitType)(menu_entity_1.MenuEntity, ['id']) {
}
exports.InsertMenuDto = InsertMenuDto;
//# sourceMappingURL=InsertMenu.dto.js.map