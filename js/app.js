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
let LIST, id;

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
      addToDo(toDo);
      LIST.push()
    }
    input.value = "";
  }
});
// Example usage
addToDo("Coffee", 1, true, false,);
