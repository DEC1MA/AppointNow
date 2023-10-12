"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const generator_1 = require("../../../../utils/generator");
const PendingFactory_1 = require("../../factories/pending/PendingFactory");
const verify = async (cCode, vCode) => {
    if (!cCode)
        return { status: 'failure', details: 'client code cannot be empty' };
    if (!vCode)
        return { status: 'failure', details: 'verification code cannot be empty' };
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        let pending = await PendingFactory_1.default.instance.readByCode({ cCode, vCode }, session);
        if (!pending) {
            return { status: 'failure', details: 'registration not found' };
        }
        pending = await PendingFactory_1.default.instance.update({ phone: pending.phone }, { phone: pending.phone, vCode: '', cCode: generator_1.default.makeUniqueId(), state: 'verified' }, session);
        await session.commitTransaction();
        session.endSession();
        return { status: 'success', data: { clientCode: pending.cCode } };
    }
    catch (ex) {
        console.log(ex);
        console.log('transaction aborted');
        await session.abortTransaction();
        session.endSession();
        return { status: 'faulure', details: ex };
    }
};
exports.default = verify;
//# sourceMappingURL=verify.js.map