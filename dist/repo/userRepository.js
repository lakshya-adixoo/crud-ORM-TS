"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const User_entity_1 = require("../entities/User.entity");
const dataSource_1 = __importDefault(require("../datasource/dataSource"));
dataSource_1.default.getRepository(User_entity_1.User);
class UserRepository extends typeorm_1.Repository {
    findByFullName(firstName, lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.findOneBy({ firstName, lastName });
        });
    }
    activateUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.update(userId, { isActive: true });
            return result.affected === 1;
        });
    }
    updatePassword(userId, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.update(userId, { password: newPassword });
            return result.affected === 1;
        });
    }
}
exports.UserRepository = UserRepository;
