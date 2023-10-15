"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pending_schema_1 = require("../../../../models/secondary/pending/pending.schema");
class PendingFactory {
    static get instance() {
        return PendingFactory._instance;
    }
    constructor() {
        PendingFactory._instance = this;
    }
    async create(data, session) {
        return (await pending_schema_1.Pending.create([data], { session }))[0];
    }
    async createAndVerify(data, session) {
        return (await pending_schema_1.Pending.create([data], { session }))[0];
    }
    async readByPhone(data, session) {
        return await pending_schema_1.Pending.findOne(data).session(session).exec();
    }
    async readByCode(data, session) {
        return await pending_schema_1.Pending.findOne(data).session(session).exec();
    }
    async readByClientCode(data, session) {
        return await pending_schema_1.Pending.findOne(data).session(session).exec();
    }
    async update(condition, data, session) {
        return await pending_schema_1.Pending.findOneAndUpdate(condition, data, { new: true }).session(session);
    }
    async delete(condition, session) {
        await pending_schema_1.Pending.deleteOne(condition).session(session);
    }
}
exports.default = PendingFactory;
//# sourceMappingURL=PendingFactory.js.map