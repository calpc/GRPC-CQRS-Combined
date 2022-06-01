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
exports.HeroesGameSagas = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const clc = require("cli-color");
const operators_1 = require("rxjs/operators");
const drop_ancient_item_command_1 = require("../commands/impl/drop-ancient-item.command");
const hero_killed_dragon_event_1 = require("../events/impl/hero-killed-dragon.event");
const itemId = '0';
let HeroesGameSagas = class HeroesGameSagas {
    constructor() {
        this.dragonKilled = (events$) => {
            return events$
                .pipe(cqrs_1.ofType(hero_killed_dragon_event_1.HeroKilledDragonEvent), operators_1.delay(1000), operators_1.map(event => {
                console.log(clc.redBright('Inside [HeroesGameSagas] Saga'));
                return new drop_ancient_item_command_1.DropAncientItemCommand(event.heroId, itemId);
            }));
        };
    }
};
__decorate([
    cqrs_1.Saga(),
    __metadata("design:type", Object)
], HeroesGameSagas.prototype, "dragonKilled", void 0);
HeroesGameSagas = __decorate([
    common_1.Injectable()
], HeroesGameSagas);
exports.HeroesGameSagas = HeroesGameSagas;
//# sourceMappingURL=heroes.sagas.js.map