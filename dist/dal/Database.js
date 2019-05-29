"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const help_1 = __importDefault(require("../help"));
const mysql_1 = __importDefault(require("mysql"));
const dbUser = help_1.default.user;
const dbPassword = help_1.default.password;
const dbName = "myExampleDb";
function createDb() {
    return __awaiter(this, void 0, void 0, function* () {
        const con = mysql_1.default.createConnection({
            host: "localhost",
            user: dbUser,
            password: dbPassword
        });
        con.connect(function (err) {
            if (err) {
                console.log("Could not connect to the database, please check the manual to enter your own credentials of your db");
                process.exit();
            }
            console.log("Data layer connected!");
            con.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`, function (err, result) {
                if (err)
                    throw err;
                console.log("Database created");
                con.destroy();
            });
        });
    });
}
exports.createDb = createDb;
// @ts-ignore
const sequelize = new sequelize_1.default(dbName, dbUser, dbPassword, {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
