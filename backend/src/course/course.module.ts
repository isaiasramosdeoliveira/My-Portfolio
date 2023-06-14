import { Module } from "@nestjs/common";
import CourseService from "./services/course.service";
import CourseController from "./course.controller";

@Module({
    controllers: [CourseController],
    exports: [],
    imports:[],
    providers: [CourseService]
})

export default class CourseModule {};