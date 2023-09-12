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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const fs = require("fs");
let MenuService = exports.MenuService = class MenuService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async GetAllMenu() {
        return await this.prisma.menu.findMany();
    }
    async GetMenu(shopId) {
        return await this.prisma.menu.findFirst({
            where: {
                shopId: shopId
            }
        });
    }
    async InsertMenu(insertMenuDto, file) {
        if (!insertMenuDto.name || !insertMenuDto.description) {
            if (file) {
                fs.unlink(file.path, (err) => {
                    if (err) {
                        console.error('Gagal menghapus file:', err);
                        return;
                    }
                    console.log('File berhasil dihapus.');
                });
            }
            return { message: "Semua kolom harus diisi" };
        }
        if (!file) {
            insertMenuDto.menu_display = "menudefault.png";
        }
        else
            insertMenuDto.menu_display = file.filename;
        try {
            return await this.prisma.menu.create({
                data: insertMenuDto
            });
        }
        catch (err) {
            return {
                message: err,
            };
        }
    }
    async UpdateMenu(id, insertMenuDto, file) {
        const existingMenu = await this.prisma.menu.findUnique({
            where: { id }
        });
        if (!existingMenu) {
            if (file) {
                fs.unlink(file.path, (err) => {
                    if (err) {
                        console.error('Gagal menghapus file:', err);
                        return;
                    }
                    console.log('File berhasil dihapus.');
                });
            }
            return { message: "Id menu tidak ditemukan" };
        }
        if (file) {
            if (existingMenu.menu_display != 'menudefault.png') {
                fs.unlink(`imagedata\\menu\\${existingMenu.menu_display}`, (err) => {
                    if (err) {
                        console.error('Gagal menghapus file:', err);
                        return;
                    }
                    console.log('File berhasil diganti.');
                });
            }
            insertMenuDto.menu_display = file.filename;
        }
        return await this.prisma.menu.update({
            data: insertMenuDto,
            where: { id }
        });
    }
    async DeleteMenu(id) {
        return await this.prisma.menu.delete({
            where: { id }
        });
    }
};
exports.MenuService = MenuService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MenuService);
//# sourceMappingURL=menu.service.js.map