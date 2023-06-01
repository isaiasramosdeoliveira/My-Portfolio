"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
if (process.env.URI != undefined)
    mongoose_1.default.connect(process.env.URI);
const db = mongoose_1.default.connection;
exports.default = db;
