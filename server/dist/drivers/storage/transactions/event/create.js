"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EventFactory_1 = require("../../factories/event/EventFactory");
const create = async (userId, businessId, startTime) => {
    if (!userId)
        return { status: 'failure', details: 'access denied' };
    if (!businessId)
        return { status: 'failure', details: 'businessId cannot be empty' };
    if (!startTime)
        return { status: 'failure', details: 'start time cannot be empty' };
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        let event = await EventFactory_1.default.instance.create({
            userId, businessId, startTime
        }, session);
        await session.commitTransaction();
        session.endSession();
        return { status: 'success', data: { event } };
    }
    catch (ex) {
        console.log(ex);
        console.log('transaction aborted');
        await session.abortTransaction();
        session.endSession();
        return { status: 'failure', details: ex };
    }
};
exports.default = create;
//# sourceMappingURL=create.js.map