"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BusinessFactory_1 = require("../../factories/business/BusinessFactory");
const EventFactory_1 = require("../../factories/event/EventFactory");
const cancelBusinessEvents = async (userId, businessId) => {
    if (!userId)
        return { status: 'failure', details: 'access denied' };
    if (!businessId)
        return { status: 'failure', details: 'businessId cannot be empty' };
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        let business = await BusinessFactory_1.default.instance.read({ businessId }, session);
        if (business.ownerId.toString() === userId.toString()) {
            await EventFactory_1.default.instance.deleteByBusinessId({ businessId }, session);
            await session.commitTransaction();
            session.endSession();
            return { status: 'success' };
        }
        else {
            await session.abortTransaction();
            session.endSession();
            return { status: 'faulure', details: 'access denied' };
        }
    }
    catch (ex) {
        console.log(ex);
        console.log('transaction aborted');
        await session.abortTransaction();
        session.endSession();
        return { status: 'faulure', details: ex };
    }
};
exports.default = cancelBusinessEvents;
//# sourceMappingURL=cancelBusinessEvents.js.map