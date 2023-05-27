import json from '../../jsons/skills.json';

function getSkills(type: string) {
  const dice = json.filter(skill => skill.type == type)
  return dice
}
export default getSkills;