import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import CourseService from "./services/course.service"
import CreateCourseDTO from "./dto/createCourse.dto";
import CourseEntity from "./course.entity";
import { v4 as uuidv4 } from 'uuid';
import UpdateCourseDTO from "./dto/updateCourse.dto";

@Controller('courses')
class CourseController {
    constructor(
        private courseService: CourseService
    ) { }

    @Get()
    async getCourses() {
        const response = await this.courseService.getAll();
        return { message: "Cursos encontrados.", response }
    }

    @Get(':id')
    async getCourse(@Param("id") id: string) {
        const response = await this.courseService.getOne(id);
        return { message: "Curso encontrado.", response }
    }

    @Post()
    async createCourse(@Body() newCourse: CreateCourseDTO) {
        const course = new CourseEntity()
        course.id = uuidv4()
        course.type = newCourse.type
        course.img = newCourse.img
        course.name = newCourse.name
        course.describe = newCourse.describe
        course.hours = newCourse.hours
        course.status = newCourse.status
        const response = await this.courseService.create(course);
        return { message: "Curso adicionado com sucesso.", response }
    }

    @Put(":id")
    async updateCourse(@Param("id") id: string,@Body() newCourse: UpdateCourseDTO) {
        const response = await this.courseService.update(id, newCourse);
        return {
            message: `Curso com o ID ${id} atualizado.`,
            response
        } 
    }

    @Delete(":id")
    async deleteCourse(@Param('id') id: string) {
        await this.courseService.delete(id);
        return {
            message: "Curso removido com sucesso."
        }
    }

};

export default CourseController;
