import { Module } from '@nestjs/common';
import CourseModule from './course/course.module';
import UserModule from './user/user.module';

@Module({
  imports: [CourseModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
