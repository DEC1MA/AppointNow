"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepare = exports.User = void 0;
const mongoose_1 = require("mongoose");
let UserSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    secret: { type: mongoose_1.Schema.Types.Mixed },
});
let User;
let prepare = () => {
    exports.User = User = mongoose_1.default.model('User', UserSchema, 'User');
};
exports.prepare = prepare;
//# sourceMappingURL=user.schema.js.map