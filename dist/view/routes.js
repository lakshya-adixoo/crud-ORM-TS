"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const router = express_1.default.Router();
router.get('/user', userController_1.getuser);
router.post('/add', userController_1.adduser);
router.put('/update/:id', userController_1.updateuser);
router.delete('/delete/:id', userController_1.deleteUser);
router.get('/getUserByName', userController_1.getUserByName);
exports.default = router;
