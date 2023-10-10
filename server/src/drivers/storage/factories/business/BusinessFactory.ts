
import mongoose from "mongoose";
import { Business } from "src/models/primary/business/business.schema";

class BusinessFactory {
    private static _instance: BusinessFactory
    static get instance() {
        return BusinessFactory._instance
    }
    constructor() {
        BusinessFactory._instance = this
    }
    async create(
        data: {
            userId: string, name: string, about: string, location: string, phone: string,
            workingDays: number[], workingHours: Array<{ start: number, duration: number }>,
            duration: number
        },
        session: mongoose.mongo.ClientSession) {
        return (await Business.create([data], { session }))[0];
    }
    async readByOwnerId(data: { ownerId: string }, session: mongoose.mongo.ClientSession) {
        return await Business.find({ ownerId: new mongoose.Types.ObjectId(data.ownerId) }).session(session).exec()
    }
    async read(data: { businessId: string }, session: mongoose.mongo.ClientSession) {
        return await Business.findOne({ _id: new mongoose.Types.ObjectId(data.businessId) }).session(session).exec()
    }
    async readByQuery(data: { query: string }) {
        return await Business.find({ $text : { $search : data.query } })
    }
    async update(condition: { businessId: string }, data: {
        userId: string, name: string, about: string, location: string, phone: string,
        workingDays: number[], workingHours: Array<{ start: number, duration: number }>,
        duration: number
    }, session: mongoose.mongo.ClientSession) {
        return await Business.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(condition.businessId) }, data, { new: true }).session(session)
    }
}

export default BusinessFactory