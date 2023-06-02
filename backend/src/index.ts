import 'dotenv/config';
import express, {Express} from "express";
import db from './config/dbConnect';
import routes from './routes/router';
import connect from './config/dbConnect';


const app:Express = express();
app.use(express.json());
routes(app);
connect();

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

export default app;
