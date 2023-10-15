"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepare = exports.Access = void 0;
const mongoose_1 = require("mongoose");
let AccessSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    secret: { type: mongoose_1.Schema.Types.Mixed },
});
let Access;
let prepare = () => {
    exports.Access = Access = mongoose_1.default.model('Access', AccessSchema, 'Access');
};
exports.prepare = prepare;
//# sourceMappingURL=access.schema.js.map