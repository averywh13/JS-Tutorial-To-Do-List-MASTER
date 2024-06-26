// CODE EXPLAINED channel

// Select the elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Variables
let LIST = []
,id = 0;

//Get item from local storage
let data = localStorage.getItem("TODO");

//Check if data is not empty
if(data){
    LIST = JSON.parse
}

//Add item to local storage
localStorage.setItem("TODO", JSON.stringify(LIST));

// Show today's date
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// Add to do function
function addToDo(toDo, id, done, trash) {
    if(trash){return;}

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

  const item = `
    <li class="item">
      <i class="fa ${DONE} co" job="complete" id="${id}"></i>
      <p class="text ${LINE}">${toDo}</p>
      <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
    </li>`;
  const position = "beforeend";

  list.insertAdjacentHTML(position, item);
}

// Add an item to the list using the enter key
document.addEventListener("keyup", function(even) {
  if (event.keyCode == 13) {
    const toDo = input.value;
    // If the input is not empty
    if (toDo) {
      addToDo(toDo, id, false, false);
      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false

      });
//Add item to local storage
localStorage.setItem("TODO", JSON.stringify(LIST));


      id++;
      
    }
    input.value = "";
  }
});

//Complete the to-do function
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH)

    LIST[element.id].done = LIST[element.id].done ? false:true;
}
//Remove the to-do
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}
//Target the items created dynamically
list.addEventListener("click", function(event){
    const element = event.target; //returns the clicked element inside list
    const elementJob = element.attributes.job.value //complete or delete

    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }
    //Add item to local storage
localStorage.setItem("TODO", JSON.stringify(LIST));
})





