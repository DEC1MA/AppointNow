"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = exports.Sessions = void 0;
const common_1 = require("@nestjs/common");
let sessions = {};
exports.Sessions = {
    putSession: (token, userId) => {
        sessions[token] = userId;
    },
    deleteSession: (token) => {
        delete sessions[token];
    }
};
let AuthMiddleware = class AuthMiddleware {
    use(req, res, next) {
        let token = req.get('token');
        let userId = sessions[token];
        if (userId) {
            req.body.userId = userId;
            next();
        }
    }
};
exports.AuthMiddleware = AuthMiddleware;
exports.AuthMiddleware = AuthMiddleware = __decorate([
    (0, common_1.Injectable)()
], AuthMiddleware);
//# sourceMappingURL=login.middleware.js.map