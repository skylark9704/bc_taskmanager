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
    var delId = "delete"+Math.random()
    .toString(36)
    .substring(7);
    del.setAttribute("id", delId);
    del.setAttribute("class","delete")
    div.appendChild(del);
    div.onmouseenter = () => {
      del.style.display = "block"
    };

    div.onmouseleave = () => {
      del.style.display = "none"
    };

    del.onclick = () => {
      //var d = document.getElementById(this.id);
      //list.removeChild(d);
      var x = document.getElementById(delId).parentNode;
      x.parentNode.removeChild(x);
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
    task.setAttribute("onmouseup","document.execCommand('selectAll',false,null)")
    description.setAttribute("contenteditable", "true");
    description.setAttribute("onfocusin","document.execCommand('selectAll',false,null)")
    description.setAttribute("onmouseup","document.execCommand('selectAll',false,null)")

    //add listeners to capture changes
    task.addEventListener(
      "blur",
      function() {
        console.log(this.id+": TASK :"+task.textContent);
      },
      false
    );

    description.addEventListener(
      "blur",
      function() {
        console.log(this.id+": DESC :"+description.textContent);
      },
      false
    );

    // add elements to dom
    div.appendChild(task);
    div.appendChild(description);
    list.appendChild(div);
  }
}
