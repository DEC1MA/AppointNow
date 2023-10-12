"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const transactions_1 = require("../../../drivers/storage/transactions");
let UserService = class UserService {
    main() {
        return 'welcome to decima user controller !';
    }
    async register(body) {
        return await transactions_1.default.user.register(body.phone);
    }
    async verify(body) {
        return await transactions_1.default.user.verify(body.cCode, body.vCode);
    }
    async complete(body) {
        return await transactions_1.default.user.complete(body.cCode, body.firstName, body.lastName);
    }
    async login(body) {
        return await transactions_1.default.user.login(body.token);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map