"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dataSource_1 = __importDefault(require("./datasource/dataSource"));
const routes_1 = __importDefault(require("./view/routes"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.default);
dataSource_1.default.initialize().then(() => {
    console.log("DataSource successfully connected with the database!!!");
}).catch((err) => {
    console.log("Database connection failed", err);
});
app.listen(PORT, () => {
    console.log(`Server is runinng on PORT ${PORT}`);
});
