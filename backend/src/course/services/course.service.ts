import { Injectable } from '@nestjs/common'
import CourseEntity from '../course.entity';

@Injectable()
class CourseService {
    courses: CourseEntity[] = [
        {
            id: "1",
            type: "frontend",
            img: 'img',
            describe: 'describe',
            name: "name",
            hours: 20,
            status: true
        },
        {
            id: "2",
            type: "backend",
            img: 'img',
            describe: 'describe',
            name: "name",
            hours: 60,
            status: false
        },
    ];
    async getAll() {
        return this.courses;
    }
    async getOne(id: string) {
        return this.courses.find(course => course.id === id);
    }
    async create(course: CourseEntity) {
        return this.courses.push(course);
    }
    private searchPerID(id: string) {
        const course = this.courses.find(
            course => course.id === id
        )
        if (!course) { throw new Error("Curso não existe."); }
        return course;
    }
    async update(id: string, newCourse: Partial<CourseEntity>) {
        const course = this.searchPerID(id)

        Object.entries(newCourse).forEach(([key, value]) => {
            if (key === 'id') {
                return;
            }
            course[key] = value
        })

        return course
    }
    delete(id: string) {
        const course = this.searchPerID(id)
        if (!course) throw new Error("Usuário não existe.");
        const index = this.courses.findIndex(course => course.id === id);
        this.courses.splice(index, 1);
    }

}
export default CourseService;