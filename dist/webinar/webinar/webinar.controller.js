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
exports.WebinarController = void 0;
const common_1 = require("@nestjs/common");
const webinar_service_1 = require("./webinar.service");
const common_2 = require("@nestjs/common");
const webinar2_entity_1 = require("../webinar2.entity");
let WebinarController = exports.WebinarController = class WebinarController {
    constructor(webinarService) {
        this.webinarService = webinarService;
    }
    index() {
        return this.webinarService.findAll();
    }
    getOne(id) {
        return this.webinarService.findOne(id);
    }
    async create(webinarData) {
        return this.webinarService.create(webinarData);
    }
    async delete(id) {
        return this.webinarService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WebinarController.prototype, "index", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WebinarController.prototype, "getOne", null);
__decorate([
    (0, common_2.Post)('create'),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [webinar2_entity_1.Webinar2]),
    __metadata("design:returntype", Promise)
], WebinarController.prototype, "create", null);
__decorate([
    (0, common_2.Delete)(':id/delete'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WebinarController.prototype, "delete", null);
exports.WebinarController = WebinarController = __decorate([
    (0, common_1.Controller)('webinar'),
    __metadata("design:paramtypes", [webinar_service_1.WebinarService])
], WebinarController);
//# sourceMappingURL=webinar.controller.js.map