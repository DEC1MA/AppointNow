"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepare = exports.Pending = void 0;
const mongoose_1 = require("mongoose");
let PendingSchema = new mongoose_1.Schema({
    phone: { type: String, required: true, unique: true },
    vCode: { type: String, required: true },
    cCode: { type: String, required: true },
});
let Pending;
let prepare = () => {
    exports.Pending = Pending = mongoose_1.default.model('Pending', PendingSchema, 'Pending');
};
exports.prepare = prepare;
//# sourceMappingURL=pending.schema.js.map