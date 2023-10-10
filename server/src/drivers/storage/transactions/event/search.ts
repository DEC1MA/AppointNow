import mongoose from "mongoose";
import EventFactory from "../../factories/event/EventFactory";

const search = async (userId: string, query: string) => {
    
    if (!userId) return { status: 'failure', details: 'access denied' }
    if (!query || (query.length === 0)) return { status: 'failure', details: 'query cannot be empty' }

    let businesses = await EventFactory.instance.readByQuery({ query })
    return { status: 'success', data: { businesses } }
}

export default search;
