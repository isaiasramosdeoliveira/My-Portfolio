import express, {Router} from "express";
import CourseController from "../controllers/CourseController";

const route: Router = express.Router();
route
    .get("/courses", CourseController.getCourses);


export default route;