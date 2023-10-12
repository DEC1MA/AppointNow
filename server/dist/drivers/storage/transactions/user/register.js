"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PendingFactory_1 = require("../../factories/pending/PendingFactory");
const generator_1 = require("../../../../utils/generator");
const register = async (phone) => {
    if (!phone)
        return { status: 'failure', details: 'phone cannot be empty' };
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        let pending = await PendingFactory_1.default.instance.readByPhone({ phone }, session);
        if (!pending) {
            pending = await PendingFactory_1.default.instance.create({ phone, vCode: generator_1.default.makeUniqueId(), cCode: generator_1.default.makeUniqueId() }, session);
        }
        else {
            pending = await PendingFactory_1.default.instance.update({ phone }, { phone, vCode: generator_1.default.makeUniqueId(), cCode: generator_1.default.makeUniqueId(), state: 'registered' }, session);
        }
        await session.commitTransaction();
        session.endSession();
        return { status: 'success', data: { clientCode: pending.cCode, verificationCode: pending.vCode } };
    }
    catch (ex) {
        console.log(ex);
        console.log('transaction aborted');
        await session.abortTransaction();
        session.endSession();
        return { status: 'faulure', details: ex };
    }
};
exports.default = register;
//# sourceMappingURL=register.js.map