"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepare = exports.Session = void 0;
const mongoose_1 = require("mongoose");
let SessionSchema = new mongoose_1.Schema({
    token: { type: String, required: true, unique: true },
    userId: { type: mongoose_1.Schema.Types.ObjectId, required: true },
});
let Session;
let prepare = () => {
    exports.Session = Session = mongoose_1.default.model('Session', SessionSchema, 'Session');
};
exports.prepare = prepare;
//# sourceMappingURL=session.schema.js.map