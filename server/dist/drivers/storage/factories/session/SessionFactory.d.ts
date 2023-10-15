import mongoose from "mongoose";
declare class SessionFactory {
    private static _instance;
    static get instance(): SessionFactory;
    constructor();
    create(data: {
        token: string;
        userId: string;
    }, session: mongoose.mongo.ClientSession): Promise<any>;
    readByToken(data: {
        token: string;
    }, session?: mongoose.mongo.ClientSession): Promise<any>;
    update(condition: {
        userId: string;
    }, data: {
        token: string;
    }, session: mongoose.mongo.ClientSession): Promise<any>;
}
export default SessionFactory;
