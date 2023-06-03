import json from '../../jsons/courses.json';

function countCourses(type: string){
  const response = json.filter(course => course.type == type);
  return response.length;
}
export default countCourses