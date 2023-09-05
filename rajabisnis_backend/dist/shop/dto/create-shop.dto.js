"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShopDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const shop_entity_1 = require("../entities/shop.entity");
class CreateShopDto extends (0, mapped_types_1.OmitType)(shop_entity_1.ShopEntity, ['id']) {
}
exports.CreateShopDto = CreateShopDto;
//# sourceMappingURL=create-shop.dto.js.map