"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const dbConnect_1 = __importDefault(require("./config/dbConnect"));
const router_1 = __importDefault(require("./routes/router"));
dbConnect_1.default.once("open", () => console.log("Connected database"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, router_1.default)(app);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
exports.default = app;
