"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../dal/database"));
const sequelize_1 = __importDefault(require("sequelize"));
const userModel = database_1.default.define('user', {
    idUser: {
        type: sequelize_1.default.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: sequelize_1.default.UUIDV4
    },
    name: {
        type: sequelize_1.default.STRING(100),
        allowNull: false
    },
    email: {
        type: sequelize_1.default.STRING(254),
        allowNull: false
    },
});
exports.default = userModel;
