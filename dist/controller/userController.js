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
exports.deleteUser = exports.updateuser = exports.adduser = exports.getuser = exports.getUserByName = void 0;
const User_entity_1 = require("../entities/User.entity");
const dataSource_1 = __importDefault(require("../datasource/dataSource"));
const userRepository_1 = require("../repo/userRepository");
const getUserByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName } = req.body;
        const userRepo = dataSource_1.default.getRepository(User_entity_1.User).extend(userRepository_1.UserRepository);
        const user = yield userRepo.find();
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.getUserByName = getUserByName;
const getuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRepo = dataSource_1.default.getRepository(User_entity_1.User);
        const users = yield userRepo.find({});
        if (users.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        return res.status(200).json(users);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});
exports.getuser = getuser;
const adduser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, isActive, id, profile } = req.body;
    try {
        const userRepo = dataSource_1.default.getRepository(User_entity_1.User);
        const existingEmp = yield userRepo.findOne({ where: { id } });
        if (!existingEmp) {
            const newEmp = userRepo.create(req.body);
            yield userRepo.save(newEmp);
            return res.status(201).json({ message: "Employee ID added successfully" });
        }
        return res.status(200).json({ message: "Employee already exists" });
    }
    catch (error) {
        console.error("Error adding employee:", error);
        return res.status(500).json({ error: "Internal server error" }); // Use 500 instead of 200
    }
});
exports.adduser = adduser;
const updateuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { firstName, lastName, isActive, profile } = req.body;
        const userRepo = dataSource_1.default.getRepository(User_entity_1.User);
        const existingEmp = yield userRepo.findOne({ where: { id: Number(id) } });
        if (!existingEmp) {
            return res.status(400).json({
                success: true,
                message: "user not found"
            });
        }
        if (!id) {
            return res.status(404).json({
                success: true,
                message: "please provide ID"
            });
        }
        if (!lastName || !firstName) {
            return res.status(404).json({
                success: true,
                message: "please provide email and password"
            });
        }
        if (lastName) {
            existingEmp.lastName = lastName;
        }
        if (firstName) {
            existingEmp.firstName = firstName;
        }
        if (isActive) {
            existingEmp.isActive = isActive;
        }
        yield userRepo.save(existingEmp);
        return res.status(200).json({
            success: true,
            message: "user updated successfully"
        });
    }
    catch (err) {
        console.log("Internal Server Error", err);
        return res.status(400).json({
            success: true,
            message: "Internal Server Error"
        });
    }
});
exports.updateuser = updateuser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const userRepo = dataSource_1.default.getRepository(User_entity_1.User);
        const findUser = yield userRepo.find({ where: { id: Number(id) } });
        yield userRepo.remove(findUser);
        return res.status(200).json({
            success: true,
            message: "User Deleted Successfully"
        });
    }
    catch (err) {
        console.log("Internal Server error");
        return res.status(404).json({
            success: true,
            message: "Internal Server Error"
        });
    }
});
exports.deleteUser = deleteUser;
