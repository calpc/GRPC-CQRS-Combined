"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroKilledDragonHandler = void 0;
const events_handler_decorator_1 = require("@nestjs/cqrs/dist/decorators/events-handler.decorator");
const clc = require("cli-color");
const hero_killed_dragon_event_1 = require("../impl/hero-killed-dragon.event");
let HeroKilledDragonHandler = class HeroKilledDragonHandler {
    handle(event) {
        console.log(clc.greenBright('HeroKilledDragonEvent...'));
    }
};
HeroKilledDragonHandler = __decorate([
    events_handler_decorator_1.EventsHandler(hero_killed_dragon_event_1.HeroKilledDragonEvent)
], HeroKilledDragonHandler);
exports.HeroKilledDragonHandler = HeroKilledDragonHandler;
//# sourceMappingURL=hero-killed-dragon.handler.js.map