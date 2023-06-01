import "dotenv/config";
import mongoose from "mongoose";
if (process.env.URI != undefined) mongoose.connect(process.env.URI);
const db = mongoose.connection;
export default db;

