"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroFoundItemHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const clc = require("cli-color");
const hero_found_item_event_1 = require("../impl/hero-found-item.event");
let HeroFoundItemHandler = class HeroFoundItemHandler {
    handle(event) {
        console.log(clc.yellowBright('Async HeroFoundItemEvent...'));
    }
};
HeroFoundItemHandler = __decorate([
    cqrs_1.EventsHandler(hero_found_item_event_1.HeroFoundItemEvent)
], HeroFoundItemHandler);
exports.HeroFoundItemHandler = HeroFoundItemHandler;
//# sourceMappingURL=hero-found-item.handler.js.map