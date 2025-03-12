"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_entity_1 = require("../entities/User.entity");
const dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_NAME || "crud-api",
    logging: true,
    entities: [User_entity_1.User],
    migrationsTableName: "migration_table",
    migrations: ["src/migrations/*.ts"],
});
exports.default = dataSource;
