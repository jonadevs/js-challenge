const input = document.getElementById("item-input");
const itemContainer = document.getElementById("item-container");

function onSubmit() {
    if (input.value === "") {
        return;
    }
    createItem(input.value);
    input.value = "";
}

function createItem(newItem) {
    const item = generateItem(newItem);
    itemContainer.prepend(item);
}

function generateItem(newItem) {
    const item = document.createElement("div");
    item.classList.add("item");

    const text = document.createElement("span");
    text.innerHTML = newItem;

    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.innerHTML = "🖊";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = "❌";
    deleteButton.onclick = deleteItem;

    item.append(text, editButton, deleteButton);

    return item;
}

function deleteItem($event) {
    $event.target.parentElement.remove();
}
