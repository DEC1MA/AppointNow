"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BusinessFactory_1 = require("../../factories/business/BusinessFactory");
const search = async (userId, query) => {
    if (!userId)
        return { status: 'failure', details: 'access denied' };
    if (!query || (query.length === 0))
        return { status: 'failure', details: 'query cannot be empty' };
    let businesses = await BusinessFactory_1.default.instance.readByQuery({ query });
    return { status: 'success', data: { businesses } };
};
exports.default = search;
//# sourceMappingURL=search.js.map