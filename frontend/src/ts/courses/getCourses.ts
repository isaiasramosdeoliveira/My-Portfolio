import json from '../../jsons/courses.json';

function getCourses(type: string) {
  const diceJSON: any = json.filter(course => course.type == type)
  const dice = diceJSON.reverse();
  return dice
}
export default getCourses;