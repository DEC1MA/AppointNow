import mongoose from "mongoose";
import BusinessFactory from "../../factories/business/BusinessFactory";
import EventFactory from "../../factories/event/EventFactory";

const create = async (userId: string, businessId: string, startTime: number) => {
    
    if (!userId) return { status: 'failure', details: 'access denied' }
    if (!businessId) return { status: 'failure', details: 'businessId cannot be empty' }
    if (!startTime) return { status: 'failure', details: 'start time cannot be empty' }

    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        let event = await EventFactory.instance.create({
            userId, businessId, startTime
        }, session)
        await session.commitTransaction()
        session.endSession()
        return { status: 'success', data: { event } }
    } catch (ex) {
        console.log(ex)
        console.log('transaction aborted')
        await session.abortTransaction();
        session.endSession();
        return { status: 'faulure', details: ex }
    }
}

export default create;
