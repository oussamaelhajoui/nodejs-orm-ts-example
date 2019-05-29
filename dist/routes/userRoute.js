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
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./../models/user"));
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log(`user hit`);
    const resObj = {
        message: "working",
        users: []
    };
    user_1.default.findAll()
        .then((r) => {
        if (r.length > 0) {
            resObj.users = r;
            res.send(resObj);
        }
        else {
            res.status(204).send();
        }
    })
        .catch((e) => {
        resObj.message = e;
        res.status(204).send(resObj);
    });
}));
router.get('/:email', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const resObj = {
        message: "working",
        users: []
    };
    user_1.default.findOne({
        where: { email: req.params.email }
    }).then((user) => {
        if (user == null) { // return no content when no user is found on that email
            res.status(204).send();
            return;
        }
        resObj.users.push(user);
        res.status(200).send(resObj);
    }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
    });
}));
router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const resObj = {
        message: "working",
        id: 0
    };
    // check if email already exists
    user_1.default.findOne({
        where: { email: req.body.email }
    }).then((user) => {
        if (user != null) {
            resObj.message = "Email already exists in the database.";
            res.status(409).send(resObj); // send conflict error
        }
    }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
    });
    // creating user
    user_1.default.create({ name: req.body.name, email: req.body.email })
        .then(() => user_1.default.findOrCreate({ where: { name: req.body.name } }))
        .then(([userx]) => {
        resObj.id = userx.idUser || 0;
        res.status(201).send(resObj);
    });
}));
router.put('/:email', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const resObj = {
        message: "working",
        id: 0
    };
    // check if email already exists
    user_1.default.findOne({
        where: { email: req.params.email }
    }).then((user) => {
        if (user == null) {
            resObj.message = "Email does not exist in the database.";
            res.status(204).send(); // send conflict error
            return;
        }
        user.update(Object.assign({}, req.body))
            .then((...x) => {
            res.status(202).send(x);
        });
    }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
    });
}));
exports.default = router;
