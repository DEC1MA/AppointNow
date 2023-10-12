import mongoose from "mongoose";
import generator from "../../../../utils/generator";
import PendingFactory from "../../factories/pending/PendingFactory";

const verify = async (cCode: string, vCode: string) => {
    if (!cCode) return { status: 'failure', details: 'client code cannot be empty' }
    if (!vCode) return { status: 'failure', details: 'verification code cannot be empty' }
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        let pending = await PendingFactory.instance.readByCode({ cCode, vCode }, session)
        if (!pending) {
            return { status: 'failure', details: 'registration not found' }
        }
        pending = await PendingFactory.instance.update({ phone: pending.phone }, { phone: pending.phone, vCode: '', cCode: generator.makeUniqueId(), state: 'verified' }, session)
        await session.commitTransaction();
        session.endSession();
        return { status: 'success', data: { clientCode: pending.cCode } }
    } catch (ex) {
        console.log(ex)
        console.log('transaction aborted')
        await session.abortTransaction();
        session.endSession();
        return { status: 'faulure', details: ex }
    }
}

export default verify;
