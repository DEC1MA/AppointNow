import mongoose from "mongoose";
declare class PendingFactory {
    private static _instance;
    static get instance(): PendingFactory;
    constructor();
    create(data: {
        phone: string;
        vCode: string;
        cCode: string;
    }, session: mongoose.mongo.ClientSession): Promise<any>;
    readByPhone(data: {
        phone: string;
    }, session: mongoose.mongo.ClientSession): Promise<any>;
    readByCode(data: {
        cCode: string;
        vCode: string;
    }, session: mongoose.mongo.ClientSession): Promise<any>;
    readByClientCode(data: {
        cCode: string;
    }, session: mongoose.mongo.ClientSession): Promise<any>;
    update(condition: {
        phone: string;
    }, data: {
        phone: string;
        vCode: string;
        cCode: string;
        state: string;
    }, session: mongoose.mongo.ClientSession): Promise<any>;
    delete(condition: {
        phone: string;
    }, session: mongoose.mongo.ClientSession): Promise<void>;
}
export default PendingFactory;
