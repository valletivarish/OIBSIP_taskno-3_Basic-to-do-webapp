function addTask() {
  const inputBox = document.getElementById("Task");
  const listContainer = document.getElementById("listContainer");
  const data = inputBox.value;

  if (data === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `<span>${data}</span> <button id="removebutton" onclick="removeTask(this)"><i class="fa-solid fa-x"></i></button>`;
    listContainer.appendChild(li);
    inputBox.value = "";
    li.querySelector("button").addEventListener("click", function (event) {
      event.stopPropagation();
      removeTask(this);
    });
  }
}

function removeTask(button) {
  // Remove the clicked task (parent <li> element)
  button.parentNode.remove();
}
