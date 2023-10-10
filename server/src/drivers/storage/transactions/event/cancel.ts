import mongoose from "mongoose";
import EventFactory from "../../factories/event/EventFactory";

const cancel = async (userId: string, eventId: string) => {

    if (!userId) return { status: 'failure', details: 'access denied' }
    if (!eventId) return { status: 'failure', details: 'eventId cannot be empty' }

    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        let event = await EventFactory.instance.readByUserIdAndEventId({
            eventId, userId
        }, session)
        if (event) {
            await EventFactory.instance.delete({ eventId }, session)
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
        return { status: 'faulure', details: ex }
    }
}

export default cancel;
