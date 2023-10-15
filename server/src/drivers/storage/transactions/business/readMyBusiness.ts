import mongoose from "mongoose";
import BusinessFactory from "../../factories/business/BusinessFactory";

const readMyBusiness = async (userId: string) => {
    
    if (!userId) return { status: 'failure', details: 'access denied' }

    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        let businesses = await BusinessFactory.instance.readByOwnerId({ ownerId: userId }, session)
        await session.commitTransaction()
        session.endSession()
        return { status: 'success', data: { businesses } }
    } catch (ex) {
        console.log(ex)
        console.log('transaction aborted')
        await session.abortTransaction();
        session.endSession();
        return { status: 'failure', details: ex }
    }
}

export default readMyBusiness;
