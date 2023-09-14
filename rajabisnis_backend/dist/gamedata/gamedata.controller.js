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
exports.GamedataController = void 0;
const common_1 = require("@nestjs/common");
const gamedata_service_1 = require("./gamedata.service");
const fs = require("fs");
let GamedataController = exports.GamedataController = class GamedataController {
    constructor(gamedataService) {
        this.gamedataService = gamedataService;
    }
    GetAllData() {
        return this.gamedataService.GetAllData();
    }
    GetUpdateVersion(idVersion) {
        return this.gamedataService.GetUpdateVersion(idVersion);
    }
    viewImage(imageName, res) {
        const imagePath = `./imagedata/menu/${imageName}`;
        const loadingPath = `./imagedata/menu/loading2.gif`;
        fs.access(imagePath, fs.constants.F_OK, (err) => {
            if (err) {
                const imageStream = fs.createReadStream(loadingPath);
                imageStream.pipe(res);
            }
            else {
                const imageStream = fs.createReadStream(imagePath);
                imageStream.pipe(res);
            }
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GamedataController.prototype, "GetAllData", null);
__decorate([
    (0, common_1.Get)('/version/:idVersion'),
    __param(0, (0, common_1.Param)('idVersion')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GamedataController.prototype, "GetUpdateVersion", null);
__decorate([
    (0, common_1.Get)('/image/:imageName'),
    __param(0, (0, common_1.Param)('imageName')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GamedataController.prototype, "viewImage", null);
exports.GamedataController = GamedataController = __decorate([
    (0, common_1.Controller)('gamedata'),
    __metadata("design:paramtypes", [gamedata_service_1.GamedataService])
], GamedataController);
//# sourceMappingURL=gamedata.controller.js.map