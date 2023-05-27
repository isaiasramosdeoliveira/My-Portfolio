export interface ISkill {
  id: number,
  title: string,
  img: string,
  link: string
}

export interface ICourse{
  id?: number
  img: string
  type: string
  name: string
  describe: string
  hours: number
  status: boolean
}

export interface IProjects {
  id: number
  title?: string;
  status?: boolean
  describe?: string;
  skills?: Array<object>
  functionalities?: Array<object>
  img?: string,
}

export interface IMessage{
  id: number,
  message: string
}[]
