"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = __importDefault(require("./courses"));
const routes = (app) => {
    app.get("/", (req, res) => res.send("/"));
    app.use(courses_1.default);
};
exports.default = routes;
