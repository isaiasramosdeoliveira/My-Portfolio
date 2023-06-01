import 'dotenv/config';
import express, {Express} from "express";
import db from './config/dbConnect';
import routes from './routes/router';

db.once("open", () => console.log("Connected database"));

const app:Express = express();
app.use(express.json());
routes(app);

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

export default app;
