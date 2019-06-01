class Task {
  constructor(id, task, description) {
    this.id = id;
    this.task = task;
    this.description = description;
  }

  // CREATE TASK IN LIST
  create(listId) {
    // PARAMS = [{VALUE : ELEMENT_ID , TYPE : STRING}]

    // GET SELECTED LIST
    var list = document.getElementById(listId);

    // CREATE DIV FOR RENDERING TASK , ADD DRAG AND CLASS ATTRIBUTES
    var div = document.createElement("div");
    div.setAttribute("id", this.id);
    div.setAttribute("draggable", "true");
    div.setAttribute("ondragstart", "drag(event)");
    div.setAttribute("class", "card");
    div.onmouseenter = () => {
      console.log("Mouse Over");
      var del = document.createElement("a");
      del.textContent = "Delete";
      del.setAttribute("id", "delete");
      div.appendChild(del);
      del.onclick = () => {
        var d = document.getElementById(this.id);
        list.removeChild(d);
      };
    };

    div.onmouseleave = () => {
      console.log("Mouse Leave");
      var del = document.getElementById("delete");
      div.removeChild(del);
    };

    // CREATE AND SET TEXT FOR TASK AND DESCRIPTION
    var task = document.createElement("h3");
    task.setAttribute("spellcheck", "false");
    task.textContent = this.task;
    var description = document.createElement("p");
    description.setAttribute("spellcheck", "false");
    description.textContent = this.description;

    // SET ATTRIBUTE TO MAKE EDITABLE
    task.setAttribute("contenteditable", "true");
    description.setAttribute("contenteditable", "true");

    // ADD LISTENER TO CAPTURE CHANGES
    task.addEventListener(
      "input",
      function() {
        console.log("TASK EVENT FIRED");
      },
      false
    );

    description.addEventListener(
      "input",
      function() {
        console.log("DESCRIPTION EVENT FIRED");
      },
      false
    );

    // ADD ELEMENTS TO DOM
    div.appendChild(task);
    div.appendChild(description);
    list.appendChild(div);
  }
}
