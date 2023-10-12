"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
let config = JSON.parse(fs.readFileSync(process.cwd() + '/src/resources/json/config.json', 'utf-8'));
let res = {
    json: {
        config
    }
};
exports.default = res;
//# sourceMappingURL=data.js.map