"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const transactions_1 = require("../../../drivers/storage/transactions");
let EventService = class EventService {
    main() {
        return 'welcome to decima event controller !';
    }
    async cancel(body) {
        return await transactions_1.default.event.cancel(body.userId, body.eventId);
    }
    async cancelBusinessEvents(body) {
        return await transactions_1.default.event.cancelBusinessEvents(body.userId, body.businessId);
    }
    async cancelUserEvents(body) {
        return await transactions_1.default.event.cancelUserEvents(body.userId);
    }
    async create(body) {
        return await transactions_1.default.event.create(body.userId, body.businessId, body.startTime);
    }
    async search(body) {
        return await transactions_1.default.event.search(body.userId, body.query);
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)()
], EventService);
//# sourceMappingURL=event.service.js.map