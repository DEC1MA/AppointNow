"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepare = exports.Business = void 0;
const mongoose_1 = require("mongoose");
let BusinessSchema = new mongoose_1.Schema({
    ownerId: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    about: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String, required: true },
    workingDays: { type: [], required: true },
    workingHours: { type: [], required: true },
    duration: Number,
});
let Business;
let prepare = () => {
    exports.Business = Business = mongoose_1.default.model('Business', BusinessSchema, 'Business');
};
exports.prepare = prepare;
//# sourceMappingURL=business.schema.js.map