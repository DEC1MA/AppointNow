"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const business_schema_1 = require("../../../../models/primary/business/business.schema");
class BusinessFactory {
    static get instance() {
        return BusinessFactory._instance;
    }
    constructor() {
        BusinessFactory._instance = this;
    }
    async create(data, session) {
        return (await business_schema_1.Business.create([{ ...data, ownerId: new mongoose_1.default.Types.ObjectId(data.userId) }], { session }))[0];
    }
    async readByOwnerId(data, session) {
        return await business_schema_1.Business.find({ ownerId: new mongoose_1.default.Types.ObjectId(data.ownerId) }).session(session).exec();
    }
    async read(data, session) {
        return await business_schema_1.Business.findOne({ _id: new mongoose_1.default.Types.ObjectId(data.businessId) }).session(session).exec();
    }
    async readByQuery(data) {
        return business_schema_1.Business.find({
            $or: [
                { "phone": { "$regex": data.query, "$options": "i" } },
                {
                    $or: [
                        { "location": { "$regex": data.query, "$options": "i" } },
                        {
                            $or: [
                                { "name": { "$regex": data.query, "$options": "i" } },
                                { "about": { "$regex": data.query, "$options": "i" } }
                            ]
                        }
                    ]
                }
            ]
        }).exec();
    }
    async update(condition, data, session) {
        return await business_schema_1.Business.findOneAndUpdate({ _id: new mongoose_1.default.Types.ObjectId(condition.businessId) }, data, { new: true }).session(session);
    }
}
exports.default = BusinessFactory;
//# sourceMappingURL=BusinessFactory.js.map