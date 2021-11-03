import { v4 as uuidv4 } from "uuid";

export class List implements TList {
  taskIds = [];
  id = uuidv4();
  constructor(public title: string) {}
}

export class Task implements TTask {
  id = uuidv4();
  constructor(public content: string) {}
}
