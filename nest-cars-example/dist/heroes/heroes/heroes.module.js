"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroesGameModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const handlers_1 = require("./commands/handlers");
const handlers_2 = require("./events/handlers");
const heroes_controller_1 = require("./heroes.controller");
const handlers_3 = require("./queries/handlers");
const hero_repository_1 = require("./repository/hero.repository");
const heroes_sagas_1 = require("./sagas/heroes.sagas");
let HeroesGameModule = class HeroesGameModule {
};
HeroesGameModule = __decorate([
    common_1.Module({
        imports: [cqrs_1.CqrsModule],
        controllers: [heroes_controller_1.HeroesGameController],
        providers: [
            hero_repository_1.HeroRepository,
            ...handlers_1.CommandHandlers,
            ...handlers_2.EventHandlers,
            ...handlers_3.QueryHandlers,
            heroes_sagas_1.HeroesGameSagas,
        ],
    })
], HeroesGameModule);
exports.HeroesGameModule = HeroesGameModule;
//# sourceMappingURL=heroes.module.js.map