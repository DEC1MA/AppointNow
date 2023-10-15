import mongoose from "mongoose";
import EventFactory from "../../factories/event/EventFactory";

const readFreeTimes = async (businessId: string) => {
    
    if (!businessId) return { status: 'failure', details: 'businessId cannot be empty' }

    let events = await EventFactory.instance.readByBusinessId({ businessId })
    let result = events.map(e => e.startTime)
    return { status: 'success', data: { reservedTimes: result } }
}

export default readFreeTimes;
