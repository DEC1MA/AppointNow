import mongoose from "mongoose";
import BusinessFactory from "../../factories/business/BusinessFactory";
import EventFactory from "../../factories/event/EventFactory";

const cancelBusinessEvents = async (userId: string, businessId: string) => {

    if (!userId) return { status: 'failure', details: 'access denied' }
    if (!businessId) return { status: 'failure', details: 'businessId cannot be empty' }

    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        let business = await BusinessFactory.instance.read({ businessId }, session)
        if (business.ownerId.toString() === userId.toString()) {
            await EventFactory.instance.deleteByBusinessId({ businessId }, session)
            await session.commitTransaction()
            session.endSession()
            return { status: 'success' }
        } else {
            await session.abortTransaction();
            session.endSession();
            return { status: 'faulure', details: 'access denied' }
        }
    } catch (ex) {
        console.log(ex)
        console.log('transaction aborted')
        await session.abortTransaction();
        session.endSession();
        return { status: 'faulure', details: ex }
    }
}

export default cancelBusinessEvents;
