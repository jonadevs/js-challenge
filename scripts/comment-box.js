const commentBoxSection = document.getElementsByClassName("comment-box")[0];

let comments = [];
const firstComment = {
    id: 1,
    username: "Dummy User",
    content: "Hello, world!",
    parent: null,
    numberOfChildren: 0,
};
addComment(firstComment);

renderComments();

function addComment(comment) {
    comments.push(comment);
}

function onReply(event) {
    let comment = event.target.parentElement.parentElement;
    let marginLeft = window
        .getComputedStyle(comment)
        .getPropertyValue("margin-left");
    comment.after(
        createComment("test", "test content", parseInt(marginLeft) + 50)
    );
}

function onEdit(event) {}

function onDelete(event) {
    event.target.parentElement.parentElement.remove();
}

function renderComments() {
    const commentElement = createComment("Dummy User", "Hello, world!");
    commentBoxSection.append(commentElement);
}

function createComment(username, content, indentation = 0) {
    let comment = document.createElement("div");
    comment.classList.add("comment");
    comment.style.marginLeft = `${indentation}px`;

    let usernameElement = document.createElement("div");
    usernameElement.innerText = username;
    usernameElement.classList.add("username");

    let contentElement = document.createElement("div");
    contentElement.innerText = content;
    contentElement.classList.add("content");

    let buttons = document.createElement("div");
    buttons.classList.add("buttons");

    let replyButton = document.createElement("button");
    replyButton.classList.add("reply");
    replyButton.onclick = onReply;
    replyButton.innerText = "Reply";

    let editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.onclick = onEdit;
    editButton.innerText = "Edit";

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.onclick = onDelete;
    deleteButton.innerText = "Delete";

    buttons.append(replyButton, editButton, deleteButton);
    comment.append(usernameElement, contentElement, buttons);

    return comment;
}
