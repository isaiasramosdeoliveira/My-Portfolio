import json from '../../jsons/projects.json';

function getOnProject(id: number) {
  const dice = json.filter(project => project.id == id)
  return dice
}
export default getOnProject;