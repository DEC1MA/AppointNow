import mongoose from "mongoose";
import SessionFactory from "../../factories/session/SessionFactory";
import UserFactory from "../../factories/user/UserFactory";

const connectTelegram = async (token: string, firstName: string, lastName: string) => {
    if (!token) return { status: 'failure', details: 'token cannot be empty' }
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        let user;
        let sess = await SessionFactory.instance.readByToken({ token }, session)
        if (sess) {
            user = await UserFactory.instance.read({ userId: sess.userId }, session)
        } else {
            user = await UserFactory.instance.create({ phone: token, firstName, lastName }, session)
            sess = await SessionFactory.instance.create({ token, userId: user._id }, session)
        }
        await session.commitTransaction();
        session.endSession();
        return { status: 'success', data: { session: sess, user } }
    } catch (ex) {
        console.log(ex)
        console.log('transaction aborted')
        await session.abortTransaction();
        session.endSession();
        return { status: 'failure', details: ex }
    }
}

export default connectTelegram;
