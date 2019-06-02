// attach event listener to explicitly ctach keypress
var inputId = document.getElementById('listTitle');
  inputId.addEventListener('keydown', function onEvent(event) {
    if (event.key === "Enter") {
        createNewList();
        return false;
    }
  });

function createNewTask(listId) {
  var newTask = new Task(); // class : [src : '../js/Task.js'], props : [id:String, task:String, description:String]
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
  var newList = new List(); // class : [src : '../js/List.js'], props : [id:String, title:String]
  newList.title = listTitle;
  newList.id =
    "list" +
    Math.random()
      .toString(36)
      .substring(7);
  newList.create();
}

// allow drop on location
function allowDrop(e) {
  e.preventDefault();
}

// transfer data while draging
function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
  // check if the drop is at target location
  if (e.target.className === "col list") {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }
}
