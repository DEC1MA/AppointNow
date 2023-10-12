import mongoose from "mongoose";
import PendingFactory from "../../factories/pending/PendingFactory";
import generator from "../../../../utils/generator";

const register = async (phone: string) => {
    if (!phone) return { status: 'failure', details: 'phone cannot be empty' }
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        let pending = await PendingFactory.instance.readByPhone({ phone }, session)
        if (!pending) {
            pending = await PendingFactory.instance.create({ phone, vCode: generator.makeUniqueId(), cCode: generator.makeUniqueId() }, session)
        } else {
            pending = await PendingFactory.instance.update({ phone }, { phone, vCode: generator.makeUniqueId(), cCode: generator.makeUniqueId(), state: 'registered' }, session)
        }
        await session.commitTransaction();
        session.endSession();
        return { status: 'success', data: { clientCode: pending.cCode, verificationCode: pending.vCode } }
    } catch (ex) {
        console.log(ex)
        console.log('transaction aborted')
        await session.abortTransaction();
        session.endSession();
        return { status: 'faulure', details: ex }
    }
}

export default register;
