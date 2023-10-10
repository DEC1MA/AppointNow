import mongoose from "mongoose";
import SessionFactory from "../../factories/session/SessionFactory";
import { Sessions } from "../../../../middlewares/login.middleware";

const login = async (token: string) => {
    if (!token) return { status: 'failure', details: 'token cannot be empty' }
    let sess = await SessionFactory.instance.readByToken({ token })
    if (!sess) {
        return { status: 'failure', details: 'wrong token' }
    }
    Sessions.putSession(token, sess.userId)
    return { status: 'success' }
}

export default login;
