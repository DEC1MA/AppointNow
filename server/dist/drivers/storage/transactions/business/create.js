"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BusinessFactory_1 = require("../../factories/business/BusinessFactory");
const create = async (userId, name, about, location, phone, workingDays, workingHours, duration) => {
    if (!userId)
        return { status: 'failure', details: 'access denied' };
    if (!name)
        return { status: 'failure', details: 'name cannot be empty' };
    if (!about)
        return { status: 'failure', details: 'about cannot be empty' };
    if (!location)
        return { status: 'failure', details: 'location cannot be empty' };
    if (!phone)
        return { status: 'failure', details: 'phone cannot be empty' };
    if (!workingDays || (workingDays.length === 0))
        return { status: 'failure', details: 'working days cannot be empty' };
    if (!workingHours || (workingHours.length === 0))
        return { status: 'failure', details: 'working hours cannot be empty' };
    if (!duration)
        return { status: 'failure', details: 'duration cannot be empty' };
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        let business = await BusinessFactory_1.default.instance.create({
            userId, name, about, location, phone, workingDays, workingHours, duration
        }, session);
        await session.commitTransaction();
        session.endSession();
        return { status: 'success', data: { business } };
    }
    catch (ex) {
        console.log(ex);
        console.log('transaction aborted');
        await session.abortTransaction();
        session.endSession();
        return { status: 'faulure', details: ex };
    }
};
exports.default = create;
//# sourceMappingURL=create.js.map