import express, { Express } from "express"
import courses from "./courses";

const routes = (app: Express) => {
    app.get("/", (req, res) => res.send("/"))
    app.use(
        express.json(),
        courses
    )
}

export default routes;