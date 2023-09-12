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
exports.GamedataService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let GamedataService = exports.GamedataService = class GamedataService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async GetAllData() {
        let shopData = await this.prisma.shop.findMany();
        const dataPromises = shopData.map(async (shop) => {
            const menuData = await this.prisma.menu.findMany({
                orderBy: {
                    id: 'asc',
                },
                where: { shopId: shop.id },
            });
            return {
                IdShop: shop.id,
                name: shop.name,
                description: shop.description,
                price: shop.price,
                prefab_path: shop.prefab_path,
                shop_display: shop.shop_display,
                banner_display: shop.banner_display,
                menu: menuData,
            };
        });
        const data = await Promise.all(dataPromises);
        return { data: data };
    }
    async GetUpdateVersion(idVersion) {
        const idVersionInt = parseInt(idVersion);
        const highestIdVersion = await this.prisma.versionUpdate.findFirst({
            orderBy: {
                id: 'desc',
            },
            select: {
                id: true,
                update_name: true
            },
        });
        if (!highestIdVersion) {
            return 'Tidak ada data versi saat ini.';
        }
        if (idVersionInt >= highestIdVersion.id) {
            return {
                message: 'Sudah versi terbaru',
                current_version: idVersion,
                update: false,
            };
        }
        else {
            return { message: 'Anda perlu update ke versi terbaru',
                current_version: idVersion,
                new_version: highestIdVersion,
                update: true };
        }
    }
};
exports.GamedataService = GamedataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GamedataService);
//# sourceMappingURL=gamedata.service.js.map