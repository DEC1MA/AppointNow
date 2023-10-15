"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
exports.default = {
    makeUniqueId: () => {
        return crypto.randomBytes(16).toString("hex");
    }
};
//# sourceMappingURL=generator.js.map