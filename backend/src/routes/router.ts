import { Express } from "express"
import courses from "./courses";

const routes = (app: Express) => {
    app.get("/", (req, res) => res.send("/"))
    app.use(
        courses
    )
}

export default routes;