"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const event_schema_1 = require("../../../../models/primary/event/event.schema");
class EventFactory {
    static get instance() {
        return EventFactory._instance;
    }
    constructor() {
        EventFactory._instance = this;
    }
    async create(data, session) {
        return (await event_schema_1.Event.create([data], { session }))[0];
    }
    async readByUserId(data, session) {
        if (session) {
            return await event_schema_1.Event.find({ userId: new mongoose_1.default.Types.ObjectId(data.userId) }).session(session).exec();
        }
        else {
            return await event_schema_1.Event.find({ userId: new mongoose_1.default.Types.ObjectId(data.userId) }).exec();
        }
    }
    async readByBusinessId(data, session) {
        return await event_schema_1.Event.find({ businessId: new mongoose_1.default.Types.ObjectId(data.businessId) }).session(session).exec();
    }
    async readByUserIdAndEventId(data, session) {
        return await event_schema_1.Event.find({ userId: new mongoose_1.default.Types.ObjectId(data.userId), _id: new mongoose_1.default.Types.ObjectId(data.eventId) }).session(session).exec();
    }
    async readByQuery(data) {
        return event_schema_1.Event.find().exec();
    }
    async update(condition, data, session) {
        return await event_schema_1.Event.findOneAndUpdate({ _id: new mongoose_1.default.Types.ObjectId(condition.businessId) }, data, { new: true }).session(session);
    }
    async delete(condition, session) {
        await event_schema_1.Event.deleteOne({ _id: new mongoose_1.default.Types.ObjectId(condition.eventId) }).session(session);
    }
    async deleteByUserId(condition, session) {
        await event_schema_1.Event.deleteMany({ userId: new mongoose_1.default.Types.ObjectId(condition.userId) }).session(session);
    }
    async deleteByBusinessId(condition, session) {
        await event_schema_1.Event.deleteMany({ businessId: new mongoose_1.default.Types.ObjectId(condition.businessId) }).session(session);
    }
}
exports.default = EventFactory;
//# sourceMappingURL=EventFactory.js.map