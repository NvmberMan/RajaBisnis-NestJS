"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuController = exports.storage = void 0;
const common_1 = require("@nestjs/common");
const menu_service_1 = require("./menu.service");
const InsertMenu_dto_1 = require("./dto/InsertMenu.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
exports.storage = {
    storage: (0, multer_1.diskStorage)({
        destination: './imagedata/menu/',
        filename: (req, file, callback) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            callback(null, `${uniqueSuffix}${(0, path_1.extname)(file.originalname)}`);
        },
    }),
    fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            return callback(new common_1.BadRequestException('Only image files are allowed!'), false);
        }
        callback(null, true);
    },
};
let MenuController = exports.MenuController = class MenuController {
    constructor(menuService) {
        this.menuService = menuService;
    }
    async GetAllMenu(shopId) {
        return await this.menuService.GetAllMenu(shopId);
    }
    async GetDetailMenu(shopId, menuId) {
        return await this.menuService.GetDetailMenu(shopId, menuId);
    }
    InsertMenu(insertMenuDto, file) {
        return this.menuService.InsertMenu(insertMenuDto, file);
    }
    UpdateMenu(id, insertMenuDto, file) {
        return this.menuService.UpdateMenu(id, insertMenuDto, file);
    }
    DeleteMenu(id) {
        return this.menuService.DeleteMenu(id);
    }
};
__decorate([
    (0, common_1.Get)('/:shopId'),
    __param(0, (0, common_1.Param)('shopId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "GetAllMenu", null);
__decorate([
    (0, common_1.Get)('/:shopId/:menuId'),
    __param(0, (0, common_1.Param)('shopId')),
    __param(1, (0, common_1.Param)('menuId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "GetDetailMenu", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', exports.storage)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InsertMenu_dto_1.InsertMenuDto, Object]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "InsertMenu", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', exports.storage)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, InsertMenu_dto_1.InsertMenuDto, Object]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "UpdateMenu", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "DeleteMenu", null);
exports.MenuController = MenuController = __decorate([
    (0, common_1.Controller)('menu'),
    __metadata("design:paramtypes", [menu_service_1.MenuService])
], MenuController);
//# sourceMappingURL=menu.controller.js.map