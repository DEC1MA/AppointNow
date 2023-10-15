"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const data_js_1 = require("../../resources/data.js");
const PendingWrapper = require("../../models/secondary/pending/pending.schema");
const SessionWrapper = require("../../models/secondary/session/session.schema");
const UserWrapper = require("../../models/primary/user/user.schema");
const EventWrapper = require("../../models/primary/event/event.schema");
const RoomWrapper = require("../../models/primary/room/room.schema.js");
const BusinessWrapper = require("../../models/primary/business/business.schema");
const AccessWrapper = require("../../models/primary/access/access.schema");
const PendingFactory_js_1 = require("./factories/pending/PendingFactory.js");
const SessionFactory_js_1 = require("./factories/session/SessionFactory.js");
const UserFactory_js_1 = require("./factories/user/UserFactory.js");
const EventFactory_js_1 = require("./factories/event/EventFactory.js");
const BusinessFactory_js_1 = require("./factories/business/BusinessFactory.js");
class Storage {
    static async connectToDb() {
        await (0, mongoose_1.connect)(data_js_1.default.json.config.addresses.MONGODB_URI);
        await mongoose_1.default.connection.db.dropDatabase();
    }
    static prepareSchemas() {
        PendingWrapper.prepare();
        SessionWrapper.prepare();
        UserWrapper.prepare();
        EventWrapper.prepare();
        RoomWrapper.prepare();
        BusinessWrapper.prepare();
        AccessWrapper.prepare();
    }
    static prepareFactories() {
        new PendingFactory_js_1.default();
        new SessionFactory_js_1.default();
        new UserFactory_js_1.default();
        new EventFactory_js_1.default();
        new BusinessFactory_js_1.default();
    }
    static async initialize() {
        await this.connectToDb();
        this.prepareSchemas();
        this.prepareFactories();
    }
}
exports.default = Storage;
//# sourceMappingURL=index.js.map