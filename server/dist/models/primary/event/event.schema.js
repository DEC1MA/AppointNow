"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepare = exports.Event = void 0;
const mongoose_1 = require("mongoose");
let EventSchema = new mongoose_1.Schema({
    startTime: { type: Number, required: true },
    userId: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    businessId: { type: mongoose_1.Schema.Types.ObjectId, required: true }
});
let Event;
let prepare = () => {
    exports.Event = Event = mongoose_1.default.model('Event', EventSchema, 'Event');
};
exports.prepare = prepare;
//# sourceMappingURL=event.schema.js.map