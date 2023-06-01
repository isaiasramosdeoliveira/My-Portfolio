"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const courseModel = new mongoose_1.default.Schema({
    id: {
        type: String
    },
    type: {
        type: String,
        required: [true, "Campo de tipo é obrigatório."]
    },
    img: {
        type: String,
        required: [true, "Campo de imagem é obrigatório."]
    },
    name: {
        type: String,
        required: [true, "Campo de nome é obrigatório."]
    },
    describe: {
        type: String,
        required: [true, "Campo de descrição é obrigatório."]
    },
    hours: {
        type: Number,
        required: [true, "Campo de horas é obrigatório."]
    },
    status: {
        type: Boolean,
        required: [true, "Campo de status é obrigatório."]
    }
});
const Course = mongoose_1.default.model("courses", courseModel);
exports.default = Course;
