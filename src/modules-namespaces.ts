//Modules & Namespaces
/**
 * You need to uncomment // "outFile": "./", in tsconfig.json
 * Should be like "outFile": "./dist/bundle.js"
 * You neee to change "module" to "amd" in tsconfig.json
 * Change index.thml ref to <script src="dist/bundle.js" defer></script>
 * /// is not a comment, but special syntax
 */

/// <reference path="models/drag-drop.ts" />
/// <reference path="models/project.ts" />
/// <reference path="state/project-state.ts" />
/// <reference path="util/validation.ts" />
/// <reference path="decorators/autobind.ts" />
/// <reference path="components/base-component.ts" />
/// <reference path="components/project-input.ts" />
/// <reference path="components/project-item.ts" />
/// <reference path="components/project-list.ts" />

/**
 * For this you need to use
 * You neee to change "module" to "es2016" in tsconfig.json as default
 * Comment out "outFile" in tsconfig.json
 * Change back index.thml ref to <script src="dist/app.js" defer></script>
 * and change it like this <script type="module" src="dist/app.js"></script>
 */
import { Draggable, DragTarget } from "./models/drag-drop"; //this is better way than the one above
import * as dragDrop from "./models/drag-drop";
//can export default as well by any name, if has only 1 thing per file

namespace App {
  class TestNamespacesL142 implements Draggable {
    dragStartHandler(event: DragEvent): void {
      //console.log("Method not implemented.");
    }
    dragEndHandler(event: DragEvent): void {
      console.log("Method not implemented.");
    }
  }

  new ProjectInputS9();
  new ProjectListS9("active");
  new ProjectListS9("finished");
}
