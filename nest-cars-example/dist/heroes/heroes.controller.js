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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroesGameController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const kill_dragon_command_1 = require("./commands/impl/kill-dragon.command");
const kill_heros_command_1 = require("./commands/impl/kill-heros.command");
const impl_1 = require("./queries/impl");
let HeroesGameController = class HeroesGameController {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    killDragon(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.commandBus.execute(new kill_dragon_command_1.KillDragonCommand(id, dto.dragonId));
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.queryBus.execute(new impl_1.GetHeroesQuery());
        });
    }
    RandomName(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.commandBus.execute(new kill_heros_command_1.KillHeroCommand(id, dto.name, dto.ranking));
        });
    }
};
__decorate([
    common_1.Post(':id/kill'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], HeroesGameController.prototype, "killDragon", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HeroesGameController.prototype, "findAll", null);
__decorate([
    common_1.Post(':id/hero'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], HeroesGameController.prototype, "RandomName", null);
HeroesGameController = __decorate([
    common_1.Controller('hero'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], HeroesGameController);
exports.HeroesGameController = HeroesGameController;
//# sourceMappingURL=heroes.controller.js.map
