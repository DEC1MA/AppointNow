"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BusinessFactory_1 = require("../../factories/business/BusinessFactory");
const readMyBusiness = async (userId) => {
    if (!userId)
        return { status: 'failure', details: 'access denied' };
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        let businesses = await BusinessFactory_1.default.instance.readByOwnerId({ ownerId: userId }, session);
        await session.commitTransaction();
        session.endSession();
        return { status: 'success', data: { businesses } };
    }
    catch (ex) {
        console.log(ex);
        console.log('transaction aborted');
        await session.abortTransaction();
        session.endSession();
        return { status: 'failure', details: ex };
    }
};
exports.default = readMyBusiness;
//# sourceMappingURL=readMyBusiness.js.map