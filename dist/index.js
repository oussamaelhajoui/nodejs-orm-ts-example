"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importStar(require("./dal/database"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const help_1 = __importDefault(require("./help"));
const cors_1 = __importDefault(require("cors"));
const port = process.env.PORT || help_1.default.port || 5000;
const app = express_1.default();
database_1.createDb().then(r => {
    database_1.default
        .authenticate()
        .then(() => {
        console.log('Connection to database has been established successfully.');
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    })
        .catch((err) => {
        console.error('Unable to connect to the database:');
        console.log(err);
        process.exit();
    });
    app.use(express_1.default.json());
    app.use(cors_1.default());
    app.use('/user', userRoute_1.default);
    app.get('/', (req, res) => {
        return res.send('Hello World!');
    });
});
