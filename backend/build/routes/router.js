"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const courses_1 = __importDefault(require("./courses"));
const routes = (app) => {
    app.get("/", (req, res) => res.send("/"));
    app.use(express_1.default.json(), courses_1.default);
};
exports.default = routes;
