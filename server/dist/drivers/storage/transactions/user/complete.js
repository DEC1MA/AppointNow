"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const generator_1 = require("../../../../utils/generator");
const PendingFactory_1 = require("../../factories/pending/PendingFactory");
const UserFactory_1 = require("../../factories/user/UserFactory");
const SessionFactory_1 = require("../../factories/session/SessionFactory");
const complete = async (cCode, firstName, lastName) => {
    if (!cCode)
        return { status: 'failure', details: 'client code cannot be empty' };
    if (!firstName)
        return { status: 'failure', details: 'first name cannot be empty' };
    if (!lastName)
        return { status: 'failure', details: 'last name cannot be empty' };
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        let pending = await PendingFactory_1.default.instance.readByClientCode({ cCode }, session);
        if (!pending) {
            return { status: 'failure', details: 'registration not found' };
        }
        const phone = pending.phone;
        await PendingFactory_1.default.instance.delete({ phone: pending.phone }, session);
        let user = await UserFactory_1.default.instance.create({ phone, firstName, lastName }, session);
        let sess = await SessionFactory_1.default.instance.create({ userId: user._id, token: generator_1.default.makeUniqueId() }, session);
        await session.commitTransaction();
        session.endSession();
        return { status: 'success', data: { user, session: sess } };
    }
    catch (ex) {
        console.log(ex);
        console.log('transaction aborted');
        await session.abortTransaction();
        session.endSession();
        return { status: 'faulure', details: ex };
    }
};
exports.default = complete;
//# sourceMappingURL=complete.js.map