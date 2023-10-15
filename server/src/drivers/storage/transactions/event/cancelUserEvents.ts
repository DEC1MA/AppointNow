import mongoose from "mongoose";
import BusinessFactory from "../../factories/business/BusinessFactory";
import EventFactory from "../../factories/event/EventFactory";

const cancelUserEvents = async (userId: string) => {

    if (!userId) return { status: 'failure', details: 'access denied' }

    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        let event = await EventFactory.instance.readByUserId({
            userId
        }, session)
        if (event) {
            await EventFactory.instance.deleteByUserId({ userId }, session)
            await session.commitTransaction()
            session.endSession()
        } else {
            await session.abortTransaction();
            session.endSession();
            return { status: 'failure', details: 'event not found' }
        }
        return { status: 'success' }
    } catch (ex) {
        console.log(ex)
        console.log('transaction aborted')
        await session.abortTransaction();
        session.endSession();
        return { status: 'failure', details: ex }
    }
}

export default cancelUserEvents;
