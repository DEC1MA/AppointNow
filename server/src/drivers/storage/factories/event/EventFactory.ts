
import mongoose from "mongoose";
import { Event } from "src/models/primary/event/event.schema";

class EventFactory {
    private static _instance: EventFactory
    static get instance() {
        return EventFactory._instance
    }
    constructor() {
        EventFactory._instance = this
    }
    async create(
        data: {
            userId: string, businessId: string, startTime: number
        },
        session: mongoose.mongo.ClientSession) {
        return (await Event.create([data], { session }))[0];
    }
    async readByUserId(data: { userId: string }, session?: mongoose.mongo.ClientSession) {
        if (session) {
            return await Event.find({ userId: new mongoose.Types.ObjectId(data.userId) }).session(session).exec()
        } else {
            return await Event.find({ userId: new mongoose.Types.ObjectId(data.userId) }).exec()
        }
    }
    async readByBusinessId(data: { businessId: string }, session: mongoose.mongo.ClientSession) {
        return await Event.find({ businessId: new mongoose.Types.ObjectId(data.businessId) }).session(session).exec()
    }
    async readByUserIdAndEventId(data: { userId: string, eventId: string }, session: mongoose.mongo.ClientSession) {
        return await Event.find({ userId: new mongoose.Types.ObjectId(data.userId), _id: new mongoose.Types.ObjectId(data.eventId) }).session(session).exec()
    }
    async readByQuery(data: { query: string }) {
        return await Event.find({ $text : { $search : data.query } })
    }
    async update(condition: { businessId: string }, data: {
        userId: string, name: string, about: string, location: string, phone: string,
        workingDays: number[], workingHours: Array<{ start: number, duration: number }>,
        duration: number
    }, session: mongoose.mongo.ClientSession) {
        return await Event.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(condition.businessId) }, data, { new: true }).session(session)
    }
    async delete(condition: { eventId: string }, session: mongoose.mongo.ClientSession) {
        await Event.deleteOne({ _id: new mongoose.Types.ObjectId(condition.eventId) }).session(session)
    }
    async deleteByUserId(condition: { userId: string }, session: mongoose.mongo.ClientSession) {
        await Event.deleteMany({ userId: new mongoose.Types.ObjectId(condition.userId) }).session(session)
    }
    async deleteByBusinessId(condition: { businessId: string }, session: mongoose.mongo.ClientSession) {
        await Event.deleteMany({ businessId: new mongoose.Types.ObjectId(condition.businessId) }).session(session)
    }
}

export default EventFactory
