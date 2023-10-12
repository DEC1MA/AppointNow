"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const user_schema_1 = require("../../../../models/primary/user/user.schema");
class UserFactory {
    static get instance() {
        return UserFactory._instance;
    }
    constructor() {
        UserFactory._instance = this;
    }
    async create(data, session) {
        return (await user_schema_1.User.create([data], { session }))[0];
    }
    async read(data, session) {
        if (session) {
            return await user_schema_1.User.findOne({ _id: new mongoose_1.default.Types.ObjectId(data.userId) }, { session }).exec();
        }
        else {
            return await user_schema_1.User.findOne({ _id: new mongoose_1.default.Types.ObjectId(data.userId) }).exec();
        }
    }
}
exports.default = UserFactory;
//# sourceMappingURL=UserFactory.js.map