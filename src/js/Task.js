class Task {
  constructor(id, task, description) {
    this.id = id;
    this.task = task;
    this.description = description;
  }

  getTask(){
    return this;
  }

  // create task in list,  params = [element_id: String]
  create(listId) {
    // get selected list
    var list = document.getElementById(listId);

    //create div for rendering task , add drag and class attributes
    var div = document.createElement("div");
    div.setAttribute("id", this.id);
    div.setAttribute("draggable", "true");
    div.setAttribute("ondragstart", "drag(event)");
    div.setAttribute("class", "card");
    var del = document.createElement("a");
    del.textContent = "Delete";
    del.setAttribute("id", "delete");
    div.appendChild(del);
    div.onmouseenter = () => {
      del.style.display = "block"
    };

    div.onmouseleave = () => {
      del.style.display = "none"
    };

    del.onclick = () => {
      var d = document.getElementById(this.id);
      list.removeChild(d);
    };

    // create and set task and desciption
    var task = document.createElement("h3");
    task.setAttribute("spellcheck", "false");
    task.textContent = this.task;
    var description = document.createElement("p");
    description.setAttribute("spellcheck", "false");
    description.textContent = this.description;

    // set attributes to make editable elements
    task.setAttribute("contenteditable", "true");
    task.setAttribute("onfocusin","document.execCommand('selectAll',false,null)")
    task.setAttribute("onclick","document.execCommand('selectAll',false,null)")
    description.setAttribute("contenteditable", "true");
    description.setAttribute("onfocusin","document.execCommand('selectAll',false,null)")
    description.setAttribute("onclick","document.execCommand('selectAll',false,null)")

    //add listeners to capture changes
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

    // add elements to dom
    div.appendChild(task);
    div.appendChild(description);
    list.appendChild(div);
  }
}
