import Course from "../models/Course";
import { Express } from "express";


class CourseController {
    static getCourses = async (req?: any, res?: any) => {
        try {
            const response = await Course.find();
            res.status(200).json(response);
            return response;
        } catch (err) {
            res.status(500).json({ message: "Erro interno no servidor." });
        }
    }
    static getOneCourse = async (req: any, res: any) => {

    }
    static putCourse = async (req: any, res: any) => {
    }
    static deleteCourse = async (req: any, res: any) => {

    }
}

export default CourseController;