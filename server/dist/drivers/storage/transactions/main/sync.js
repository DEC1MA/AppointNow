"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserFactory_1 = require("../../factories/user/UserFactory");
const EventFactory_1 = require("../../factories/event/EventFactory");
const sync = async (userId) => {
    if (!userId)
        return { status: 'failure', details: 'access denied' };
    let user = await UserFactory_1.default.instance.read({ userId });
    let events = await EventFactory_1.default.instance.readByUserId({ userId });
    return { status: 'success', data: { user, events } };
};
exports.default = sync;
//# sourceMappingURL=sync.js.map