"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventFactory_1 = require("../../factories/event/EventFactory");
const readFreeTimes = async (businessId) => {
    if (!businessId)
        return { status: 'failure', details: 'businessId cannot be empty' };
    let events = await EventFactory_1.default.instance.readByBusinessId({ businessId });
    let result = events.map(e => e.startTime);
    return { status: 'success', data: { reservedTimes: result } };
};
exports.default = readFreeTimes;
//# sourceMappingURL=readFreeTimes.js.map