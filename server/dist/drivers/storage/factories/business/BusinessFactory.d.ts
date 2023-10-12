import mongoose from "mongoose";
declare class BusinessFactory {
    private static _instance;
    static get instance(): BusinessFactory;
    constructor();
    create(data: {
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
    }, session: mongoose.mongo.ClientSession): Promise<mongoose.Document<unknown, {}, import("src/models/primary/business/business.schema").IBusiness> & import("src/models/primary/business/business.schema").IBusiness & {
        _id: mongoose.Types.ObjectId;
    }>;
    readByOwnerId(data: {
        ownerId: string;
    }, session: mongoose.mongo.ClientSession): Promise<(mongoose.Document<unknown, {}, import("src/models/primary/business/business.schema").IBusiness> & import("src/models/primary/business/business.schema").IBusiness & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    read(data: {
        businessId: string;
    }, session: mongoose.mongo.ClientSession): Promise<mongoose.Document<unknown, {}, import("src/models/primary/business/business.schema").IBusiness> & import("src/models/primary/business/business.schema").IBusiness & {
        _id: mongoose.Types.ObjectId;
    }>;
    readByQuery(data: {
        query: string;
    }): Promise<(mongoose.Document<unknown, {}, import("src/models/primary/business/business.schema").IBusiness> & import("src/models/primary/business/business.schema").IBusiness & {
        _id: mongoose.Types.ObjectId;
    })[]>;
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
    }, session: mongoose.mongo.ClientSession): Promise<mongoose.Document<unknown, {}, import("src/models/primary/business/business.schema").IBusiness> & import("src/models/primary/business/business.schema").IBusiness & {
        _id: mongoose.Types.ObjectId;
    }>;
}
export default BusinessFactory;
