const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createDoingTodo(inputText);
};

const createDoingTodo = (todo) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;

  const doneButton = document.createElement("button");
  doneButton.innerText = "done";
  doneButton.addEventListener("click", () => {
    const moveTarget = doneButton.closest("li");
    doneButton.nextElementSibling.remove();
    doneButton.remove();
    const returnButton = document.createElement("button");
    returnButton.innerText = "return";
    returnButton.addEventListener("click", () => {
        const todoText = returnButton.previousElementSibling.innerText;
        returnButton.closest("li").remove();
        createDoingTodo(todoText);
    })
    moveTarget.firstElementChild.appendChild(returnButton);
    document.getElementById("done-list").appendChild(moveTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("doing-list").removeChild(deleteTarget);
  });

  div.appendChild(p);
  div.appendChild(doneButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById("doing-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
