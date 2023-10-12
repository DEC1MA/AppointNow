"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const drivers_1 = require("./drivers");
async function bootstrap() {
    await drivers_1.default.initalize();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(10000);
}
bootstrap();
//# sourceMappingURL=main.js.map