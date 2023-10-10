import mongoose from "mongoose";
import BusinessFactory from "../../factories/business/BusinessFactory";

const search = async (userId: string, query: string) => {
    
    if (!userId) return { status: 'failure', details: 'access denied' }
    if (!query || (query.length === 0)) return { status: 'failure', details: 'query cannot be empty' }

    let businesses = await BusinessFactory.instance.readByQuery({ query })
    return { status: 'success', data: { businesses } }
}

export default search;
