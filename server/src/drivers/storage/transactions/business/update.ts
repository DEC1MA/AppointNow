import mongoose from "mongoose";
import BusinessFactory from "../../factories/business/BusinessFactory";

const update = async (userId: string, businessId: string, name: string, about: string, location: string, phone: string,
    workingDays: number[], workingHours: Array<{ start: number, duration: number }>, duration: number) => {

    if (!userId) return { status: 'failure', details: 'access denied' }
    if (!businessId) return { status: 'failure', details: 'businessId cannot be empty' }
    if (!name) return { status: 'failure', details: 'name cannot be empty' }
    if (!about) return { status: 'failure', details: 'about cannot be empty' }
    if (!location) return { status: 'failure', details: 'location cannot be empty' }
    if (!phone) return { status: 'failure', details: 'phone cannot be empty' }
    if (!workingDays || (workingDays.length === 0)) return { status: 'failure', details: 'working days cannot be empty' }
    if (!workingHours || (workingHours.length === 0)) return { status: 'failure', details: 'working hours cannot be empty' }
    if (!duration) return { status: 'failure', details: 'duration cannot be empty' }

    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        let business = await BusinessFactory.instance.update({ businessId }, {
            userId, name, about, location, phone, workingDays, workingHours, duration
        }, session)
        await session.commitTransaction()
        session.endSession()
        return { status: 'success', data: { business } }
    } catch (ex) {
        console.log(ex)
        console.log('transaction aborted')
        await session.abortTransaction();
        session.endSession();
        return { status: 'faulure', details: ex }
    }
}

export default update;
