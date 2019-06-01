class List {
  constructor(title, id) {
    this.title = title;
    this.id = id;
  }

  create() {
    var listName = document.getElementById("listTitle").value;
    console.log(listName);

    // CHECK FOR EMPTY LISTNAME
    if (listName === "") {
      alert("List Name Cannot Be Empty");
    } else {
      // GET LIST CONTAINER FROM DOM
      var listContainer = document.getElementById("list-container");

      // CREATE NEW LIST DIV AND SET CLASSES/ATTRIBUTES
      var list = document.createElement("div");
      list.setAttribute("class", "col list");
      list.setAttribute("id", this.id);
      list.setAttribute("ondrop", "drop(event)");
      list.setAttribute("ondragover", "allowDrop(event)");
      list.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        listContainer.removeChild(list)
        return false;
    }, false);

      // CREATE NEW HEADING AND APPEND TITLE
      var listTitle = document.createElement("h1");
      listTitle.setAttribute("spellcheck", "false");
      var hr = document.createElement("hr");
      var br = document.createElement("br");
      listTitle.textContent = listName;

      // CREATE 'add todo' BUTTON, SET ONCLICK FUNCTION
      var createTask = document.createElement("button");
      createTask.textContent = "Add Task";
      createTask.setAttribute("class", "button-fg position-br");
      createTask.onclick = () => {
        createNewTask(this.id);
      };

      // ADD ELEMENTS TO THE DOM
      list.appendChild(listTitle);
      list.appendChild(hr);
      list.appendChild(createTask);
      list.appendChild(br);
      listContainer.appendChild(list);

      // RESET LISTNAME INPUT
      document.getElementById("listTitle").value = "";
    }
  }
}
