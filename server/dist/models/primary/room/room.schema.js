"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepare = exports.Room = void 0;
const mongoose_1 = require("mongoose");
let UserSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    secret: { type: mongoose_1.Schema.Types.Mixed },
});
let Room;
let prepare = () => {
    exports.Room = Room = mongoose_1.default.model('Room', UserSchema, 'Room');
};
exports.prepare = prepare;
//# sourceMappingURL=room.schema.js.map