/// <reference path="base-component.ts" />
/// <reference path="../models/project.ts" />
/// <reference path="../models/drag-drop.ts" />
/// <reference path="../decorators/autobind.ts" />

namespace App {
  //ProjectItem Class
  export class ProjectItemS9
    extends ComponentS9<HTMLUListElement, HTMLLIElement>
    implements Draggable
  {
    private project: ProjectS9;

    get persons() {
      if (this.project.people === 1) {
        return "1 person";
      } else {
        return `${this.project.people} persons`;
      }
    }

    constructor(hostId: string, project: ProjectS9) {
      super("single-project", hostId, false, project.id);

      this.project = project;

      this.configure();
      this.renderContent();
    }

    @autobind
    dragStartHandler(event: DragEvent) {
      //console.log(event);
      event.dataTransfer!.setData("text/plain", this.project.id);
      event.dataTransfer!.effectAllowed = "move";
    }

    @autobind
    dragEndHandler(event: DragEvent) {
      console.log("DragEnd");
    }

    configure() {
      this.element.addEventListener("dragstart", this.dragStartHandler);
      this.element.addEventListener("dragend", this.dragEndHandler);
    }

    renderContent() {
      this.element.querySelector("h2")!.textContent = this.project.title;
      this.element.querySelector("h3")!.textContent =
        this.persons + " assigned.";
      this.element.querySelector("p")!.textContent = this.project.description;
    }
  }
}
