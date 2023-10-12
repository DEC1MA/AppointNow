"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EventFactory_1 = require("../../factories/event/EventFactory");
const cancel = async (userId, eventId) => {
    if (!userId)
        return { status: 'failure', details: 'access denied' };
    if (!eventId)
        return { status: 'failure', details: 'eventId cannot be empty' };
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        let event = await EventFactory_1.default.instance.readByUserIdAndEventId({
            eventId, userId
        }, session);
        if (event) {
            await EventFactory_1.default.instance.delete({ eventId }, session);
            await session.commitTransaction();
            session.endSession();
        }
        else {
            await session.abortTransaction();
            session.endSession();
            return { status: 'failure', details: 'event not found' };
        }
        return { status: 'success' };
    }
    catch (ex) {
        console.log(ex);
        console.log('transaction aborted');
        await session.abortTransaction();
        session.endSession();
        return { status: 'faulure', details: ex };
    }
};
exports.default = cancel;
//# sourceMappingURL=cancel.js.map