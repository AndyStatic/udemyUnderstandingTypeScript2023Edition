//Drag & Drop Interfaces
namespace App {
  export enum ProjectStatusS9 {
    Active,
    Finished,
  }

  export class ProjectS9 {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public people: number,
      public status: ProjectStatusS9
    ) {}
  }
}
