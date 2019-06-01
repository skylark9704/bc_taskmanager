function createNewTask(listId) {
  var newTask = new Task(); // CLASS : [SRC : '../js/Task.js'], PROPS : [id:String, task:String, description:String]
  newTask.id =
    "task" +
    Math.random()
      .toString(36)
      .substring(7);
  newTask.task = "Click To Edit Task Name";
  newTask.description = "Click to edit description";
  newTask.create(listId);
}

function createNewList() {
  var newList = new List(); // CLASS : [SRC : '../js/List.js'], PROPS : [id:String, title:String]
  newList.title = listTitle;
  newList.id =
    "list" +
    Math.random()
      .toString(36)
      .substring(7);
  newList.create();
}

// ALLOW DROP ON LOCATION
function allowDrop(e) {
  e.preventDefault();
}

// TRANSFER DATA WHILE DRAGGING
function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
  // CHECK IF THE DROP TARGET LOCATION
  if (e.target.className === "col list") {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }
}
