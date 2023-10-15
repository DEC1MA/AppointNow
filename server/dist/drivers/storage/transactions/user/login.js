"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SessionFactory_1 = require("../../factories/session/SessionFactory");
const login_middleware_1 = require("../../../../middlewares/login.middleware");
const login = async (token) => {
    if (!token)
        return { status: 'failure', details: 'token cannot be empty' };
    let sess = await SessionFactory_1.default.instance.readByToken({ token });
    if (!sess) {
        return { status: 'failure', details: 'wrong token' };
    }
    login_middleware_1.Sessions.putSession(token, sess.userId);
    return { status: 'success' };
};
exports.default = login;
//# sourceMappingURL=login.js.map