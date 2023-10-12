"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventFactory_1 = require("../../factories/event/EventFactory");
const search = async (userId, query) => {
    if (!userId)
        return { status: 'failure', details: 'access denied' };
    if (!query || (query.length === 0))
        return { status: 'failure', details: 'query cannot be empty' };
    let events = await EventFactory_1.default.instance.readByQuery({ query });
    return { status: 'success', data: { events } };
};
exports.default = search;
//# sourceMappingURL=search.js.map