class List {
  constructor(title, id) {
    this.title = title;
    this.id = id;
  }

  getList(){
    return this;
  }

  create() {

    //get listname for input
    var listName = document.getElementById("listTitle").value;

    // check for empty list name
    if (listName === "") {
      alert("List Name Cannot Be Empty");
    } else {
      // get list container from dom
      var listContainer = document.getElementById("list-container");

      // create new ldiv and set classes/attributes
      var list = document.createElement("div");
      list.setAttribute("class", "col list");
      list.setAttribute("id", this.id);
      list.setAttribute("ondrop", "drop(event)");
      list.setAttribute("ondragover", "allowDrop(event)");
      list.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        var con = confirm("This will delete the list and items in it. Are you sure?")
        if(con == true){
          listContainer.removeChild(list)
        }
        return false;
    }, false);

      // create new heading for title display
      var listTitle = document.createElement("h1");
      listTitle.setAttribute("spellcheck", "false");
      var hr = document.createElement("hr");
      var br = document.createElement("br");
      listTitle.textContent = listName;

      // create 'add todo' button, set onclick behaviour
      var createTask = document.createElement("button");
      createTask.textContent = "Add Task";
      createTask.setAttribute("class", "button-fg position-br");
      createTask.onclick = () => {
        createNewTask(this.id);
      };

      // add created elements to dom
      list.appendChild(listTitle);
      list.appendChild(hr);
      list.appendChild(createTask);
      list.appendChild(br);
      listContainer.appendChild(list);

      // reset input listname
      document.getElementById("listTitle").value = "";
    }
  }
}
