let add = document.querySelector(".add-btn");
let input = document.querySelector(".text-input");

createDoneBtn = () => {
  let btn = document.createElement("button");
  btn.innerHTML = "Done";
  btn.classList.add("done-button");
  return btn;
};

addTask = () => {
  let input = document.querySelector(".text-input");
  let inputValue = input.value;
  if (inputValue != "") {
    let li = document.createElement("li");
    li.innerHTML = inputValue;
    li.setAttribute("class", "list-element");
    let ul = document.querySelector(".tasks-ul");
    ul.appendChild(li);
    let btn = createDoneBtn();
    li.insertAdjacentElement("beforeend", btn);
    input.value = "";
    input.focus();
  }
};

add.addEventListener("click",addTask);

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

let tasksUl = document.querySelector(".tasks-ul");

tasksUl.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-button")) {
    // Handle the "Done" button click
    console.log("Task marked as done");
    let li = event.target.parentElement;
    li.remove();
  }
});
