"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const session_schema_1 = require("../../../../models/secondary/session/session.schema");
class SessionFactory {
    static get instance() {
        return SessionFactory._instance;
    }
    constructor() {
        SessionFactory._instance = this;
    }
    async create(data, session) {
        return (await session_schema_1.Session.create([data], { session }))[0];
    }
    async readByToken(data, session) {
        if (session) {
            return await session_schema_1.Session.findOne(data).session(session).exec();
        }
        else {
            return await session_schema_1.Session.findOne(data).exec();
        }
    }
    async update(condition, data, session) {
        return await session_schema_1.Session.findOneAndUpdate(condition, data, { new: true }).session(session);
    }
}
exports.default = SessionFactory;
//# sourceMappingURL=SessionFactory.js.map