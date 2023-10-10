
import mongoose from "mongoose";
import { Session } from "../../../../models/secondary/session/session.schema";

class SessionFactory {
    private static _instance: SessionFactory
    static get instance() {
        return SessionFactory._instance
    }
    constructor() {
        SessionFactory._instance = this
    }
    async create (data: { token: string, userId: string }, session: mongoose.mongo.ClientSession) {
        return (await Session.create([data], { session }))[0];
    }
    async readByToken (data: { token: string }, session?: mongoose.mongo.ClientSession) {
        if (session) {
            return await Session.findOne(data).session(session).exec()
        } else {
            return await Session.findOne(data).exec()
        }
    }
    async update (condition: { userId: string }, data: { token: string }, session: mongoose.mongo.ClientSession) {
        return await Session.findOneAndUpdate(condition, data, { new: true }).session(session)
    }
}

export default SessionFactory
