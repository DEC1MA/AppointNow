
import mongoose from "mongoose";
import { User } from "../../../../models/primary/user/user.schema";

class UserFactory {
    private static _instance: UserFactory
    static get instance() {
        return UserFactory._instance
    }
    constructor() {
        UserFactory._instance = this
    }
    async create(data: { phone: string, firstName: string, lastName: string }, session: mongoose.mongo.ClientSession) {
        return (await User.create([data], { session }))[0];
    }
    async read(data: { userId: string }, session?: mongoose.mongo.ClientSession) {
        if (session) {
            return await User.findOne({ _id: new mongoose.Types.ObjectId(data.userId) }).session(session).exec();
        } else {
            return await User.findOne({ _id: new mongoose.Types.ObjectId(data.userId) }).exec();
        }
    }
}

export default UserFactory
