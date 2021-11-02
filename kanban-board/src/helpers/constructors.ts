import { v4 as uuidv4 } from 'uuid'

export class List implements TList {
  tasks = []
  id = uuidv4()
  constructor(public title: string) {}
}

export class Task implements TTask {
  id = uuidv4()
  constructor(public text: string) {}
}
