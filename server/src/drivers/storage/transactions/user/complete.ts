import mongoose from "mongoose";
import generator from "../../../../utils/generator";
import PendingFactory from "../../factories/pending/PendingFactory";
import UserFactory from "../../factories/user/UserFactory";
import SessionFactory from "../../factories/session/SessionFactory";

const complete = async (cCode: string, firstName: string, lastName: string) => {
    if (!cCode) return { status: 'failure', details: 'client code cannot be empty' }
    if (!firstName) return { status: 'failure', details: 'first name cannot be empty' }
    if (!lastName) return { status: 'failure', details: 'last name cannot be empty' }
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        let pending = await PendingFactory.instance.readByClientCode({ cCode }, session)
        if (!pending) {
            return { status: 'failure', details: 'registration not found' }
        }
        const phone = pending.phone
        await PendingFactory.instance.delete({ phone: pending.phone }, session)
        let user = await UserFactory.instance.create({ phone, firstName, lastName }, session)
        let sess = await SessionFactory.instance.create({ userId: user._id, token: generator.makeUniqueId() }, session)
        await session.commitTransaction()
        session.endSession()
        return { status: 'success', data: { user, session: sess } }
    } catch (ex) {
        console.log(ex)
        console.log('transaction aborted')
        await session.abortTransaction();
        session.endSession();
        return { status: 'failure', details: ex }
    }
}

export default complete;
