"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateuser = exports.adduser = exports.getuser = exports.User = exports.dataSource = void 0;
const dataSource_1 = __importDefault(require("./datasource/dataSource"));
exports.dataSource = dataSource_1.default;
const User_entity_1 = require("./entities/User.entity");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_entity_1.User; } });
const userController_1 = require("./controller/userController");
Object.defineProperty(exports, "getuser", { enumerable: true, get: function () { return userController_1.getuser; } });
Object.defineProperty(exports, "adduser", { enumerable: true, get: function () { return userController_1.adduser; } });
Object.defineProperty(exports, "updateuser", { enumerable: true, get: function () { return userController_1.updateuser; } });
Object.defineProperty(exports, "deleteUser", { enumerable: true, get: function () { return userController_1.deleteUser; } });
