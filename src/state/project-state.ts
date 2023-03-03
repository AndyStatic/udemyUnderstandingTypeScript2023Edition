namespace App {
  type ListenerS9<T> = (items: T[]) => void;

  class StateS9<T> {
    protected listeners: ListenerS9<T>[] = [];

    addListener(listenerFn: ListenerS9<T>) {
      this.listeners.push(listenerFn);
    }
  }

  //Project State Management
  export class ProjectStateS9 extends StateS9<ProjectS9> {
    private projects: ProjectS9[] = [];
    private static instance: ProjectStateS9;

    private constructor() {
      super();
    }

    static getInstance() {
      if (this.instance) {
        return this.instance;
      }
      this.instance = new ProjectStateS9();
      return this.instance;
    }

    addProject(title: string, description: string, numOfPeople: number) {
      const newProject = new ProjectS9(
        Math.random().toString(),
        title,
        description,
        numOfPeople,
        ProjectStatusS9.Active
      );
      this.projects.push(newProject);
      this.updateListeners();
    }

    moveProject(projectId: string, newSatus: ProjectStatusS9) {
      const project = this.projects.find((prj) => prj.id === projectId);
      if (project && project.status !== newSatus) {
        project.status = newSatus;
        this.updateListeners();
      }
    }

    private updateListeners() {
      for (const listenerFn of this.listeners) {
        listenerFn(this.projects.slice());
      }
    }
  }

  export const projectStateS9 = ProjectStateS9.getInstance();
}
