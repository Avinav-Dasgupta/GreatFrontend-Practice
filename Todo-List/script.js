const input = document.getElementById("inputBox");
const list = document.getElementById("list");
const submitButton = document.getElementById("submit");

function addTask() {
    const text = input.value;
    if (text == "") {
        alert("Task is empty");
        return;
    }
    else {
        const listChild = document.createElement("li");
        const deleteButton = document.createElement("button");
        listChild.textContent = text + " ";
        deleteButton.textContent = "Delete";
        listChild.appendChild(deleteButton);
        list.appendChild(listChild);
        deleteButton.addEventListener("click", () => {
            listChild.remove();
        })
    }
    input.value = "";

}

submitButton.addEventListener("click", addTask);
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
})