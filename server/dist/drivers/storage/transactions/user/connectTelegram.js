"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SessionFactory_1 = require("../../factories/session/SessionFactory");
const UserFactory_1 = require("../../factories/user/UserFactory");
const connectTelegram = async (token, firstName, lastName) => {
    if (!token)
        return { status: 'failure', details: 'token cannot be empty' };
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        let user;
        let sess = await SessionFactory_1.default.instance.readByToken({ token }, session);
        if (sess) {
            user = await UserFactory_1.default.instance.read({ userId: sess.userId }, session);
        }
        else {
            user = await UserFactory_1.default.instance.create({ phone: token, firstName, lastName }, session);
            sess = await SessionFactory_1.default.instance.create({ token, userId: user._id }, session);
        }
        await session.commitTransaction();
        session.endSession();
        return { status: 'success', data: { session: sess, user } };
    }
    catch (ex) {
        console.log(ex);
        console.log('transaction aborted');
        await session.abortTransaction();
        session.endSession();
        return { status: 'failure', details: ex };
    }
};
exports.default = connectTelegram;
//# sourceMappingURL=connectTelegram.js.map