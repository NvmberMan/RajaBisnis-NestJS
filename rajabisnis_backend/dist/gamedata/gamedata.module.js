"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamedataModule = void 0;
const common_1 = require("@nestjs/common");
const gamedata_service_1 = require("./gamedata.service");
const gamedata_controller_1 = require("./gamedata.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let GamedataModule = exports.GamedataModule = class GamedataModule {
};
exports.GamedataModule = GamedataModule = __decorate([
    (0, common_1.Module)({
        controllers: [gamedata_controller_1.GamedataController],
        providers: [gamedata_service_1.GamedataService, prisma_service_1.PrismaService]
    })
], GamedataModule);
//# sourceMappingURL=gamedata.module.js.map