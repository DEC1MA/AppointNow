
import mongoose from "mongoose";
import { Pending } from "../../../../models/secondary/pending/pending.schema";

class PendingFactory {
    private static _instance: PendingFactory
    static get instance() {
        return PendingFactory._instance
    }
    constructor() {
        PendingFactory._instance = this
    }
    async create (data: { phone: string, vCode: string, cCode: string }, session: mongoose.mongo.ClientSession) {
        return (await Pending.create([data], { session }))[0];
    }
    async readByPhone (data: { phone: string }, session: mongoose.mongo.ClientSession) {
        return await Pending.findOne(data).session(session).exec()
    }
    async readByCode (data: { cCode: string, vCode: string }, session: mongoose.mongo.ClientSession) {
        return await Pending.findOne(data).session(session).exec()
    }
    async readByClientCode (data: { cCode: string }, session: mongoose.mongo.ClientSession) {
        return await Pending.findOne(data).session(session).exec()
    }
    async update (condition: { phone: string }, data: { phone: string, vCode: string, cCode: string, state: string }, session: mongoose.mongo.ClientSession) {
        return await Pending.findOneAndUpdate(condition, data, { new: true }).session(session)
    }
    async delete (condition: { phone: string }, session: mongoose.mongo.ClientSession) {
        await Pending.deleteOne(condition).session(session)
    }
}

export default PendingFactory
