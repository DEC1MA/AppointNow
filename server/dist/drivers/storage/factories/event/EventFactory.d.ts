import mongoose from "mongoose";
declare class EventFactory {
    private static _instance;
    static get instance(): EventFactory;
    constructor();
    create(data: {
        userId: string;
        businessId: string;
        startTime: number;
    }, session: mongoose.mongo.ClientSession): Promise<any>;
    readByUserId(data: {
        userId: string;
    }, session?: mongoose.mongo.ClientSession): Promise<any>;
    readByBusinessId(data: {
        businessId: string;
    }, session: mongoose.mongo.ClientSession): Promise<any>;
    readByUserIdAndEventId(data: {
        userId: string;
        eventId: string;
    }, session: mongoose.mongo.ClientSession): Promise<any>;
    readByQuery(data: {
        query: string;
    }): Promise<any>;
    update(condition: {
        businessId: string;
    }, data: {
        userId: string;
        name: string;
        about: string;
        location: string;
        phone: string;
        workingDays: number[];
        workingHours: Array<{
            start: number;
            duration: number;
        }>;
        duration: number;
    }, session: mongoose.mongo.ClientSession): Promise<any>;
    delete(condition: {
        eventId: string;
    }, session: mongoose.mongo.ClientSession): Promise<void>;
    deleteByUserId(condition: {
        userId: string;
    }, session: mongoose.mongo.ClientSession): Promise<void>;
    deleteByBusinessId(condition: {
        businessId: string;
    }, session: mongoose.mongo.ClientSession): Promise<void>;
}
export default EventFactory;
