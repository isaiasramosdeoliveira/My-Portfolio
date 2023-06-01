"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CourseController_1 = __importDefault(require("../controllers/CourseController"));
const route = express_1.default.Router();
route
    .get("/courses", CourseController_1.default.getCourses);
exports.default = route;
