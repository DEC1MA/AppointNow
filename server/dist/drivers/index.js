"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = require("./storage");
class Drivers {
    static async initalize() {
        await storage_1.default.initialize();
    }
}
exports.default = Drivers;
//# sourceMappingURL=index.js.map