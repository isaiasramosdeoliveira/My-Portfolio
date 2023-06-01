import express, {Router} from "express";

const route: Router = express.Router();
route
    .get("/courses", (req, res) => res.send('Courses'))


export default route;