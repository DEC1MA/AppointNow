import mongoose from "mongoose";
declare class UserFactory {
    private static _instance;
    static get instance(): UserFactory;
    constructor();
    create(data: {
        phone: string;
        firstName: string;
        lastName: string;
    }, session: mongoose.mongo.ClientSession): Promise<any>;
    read(data: {
        userId: string;
    }, session?: mongoose.mongo.ClientSession): Promise<any>;
}
export default UserFactory;
