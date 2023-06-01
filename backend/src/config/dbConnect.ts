import "dotenv/config";
import mongoose from "mongoose";

async function connect(){
    try{
        mongoose.set("strictQuery", true);
        if (process.env.URI != undefined) await mongoose.connect(process.env.URI);
        console.log("Connected database");
        
    } catch(err){
        console.log(err);
    }
}

export default connect;

