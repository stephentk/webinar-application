"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'blogclone',
    password: '123',
    database: 'blogclone',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    migrations: [],
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map