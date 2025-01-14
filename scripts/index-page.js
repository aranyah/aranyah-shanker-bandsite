const API_KEY = "8fd3018e-f075-45f1-b31a-024ab1909a89";
const bandSiteApi = new BandSiteApi(API_KEY);

const commentList = document.querySelector(".comment__list");
const commentForm = document.querySelector(".form");

function createConversationElement(commentObjParam) {
  const listElement = document.createElement("li");
  listElement.classList.add("comment__entry");

  const avatarDiv = document.createElement("div");
  avatarDiv.classList.add("comment__avatar");

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("comment__content");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("comment__header");

  const usernameElement = document.createElement("p");
  usernameElement.classList.add("comment__username");
  usernameElement.innerText = commentObjParam.name;

  const dateElement = document.createElement("span");
  dateElement.classList.add("comment__date");
  dateElement.innerText = new Date(
    commentObjParam.timestamp
  ).toLocaleDateString();

  const textEl = document.createElement("p");
  textEl.classList.add("comment__text");
  textEl.innerText = commentObjParam.comment;

  headerDiv.appendChild(usernameElement);
  headerDiv.appendChild(dateElement);

  contentDiv.appendChild(headerDiv);
  contentDiv.appendChild(textEl);

  listElement.appendChild(avatarDiv);
  listElement.appendChild(contentDiv);

  commentList.appendChild(listElement);
}

async function renderConversation() {
  try {
    commentList.replaceChildren();
    let commentData = await bandSiteApi.getComments();
    commentData.forEach((commentItem) => {
      createConversationElement(commentItem);
    });
  } catch (error) {
    console.error(error);
  }
}

renderConversation();

async function addConversation(commentObj) {
  try {
    await bandSiteApi.postComment(commentObj);
    commentList.replaceChildren();
    renderConversation();
  } catch (error) {
    console.error(error);
  }
}

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = event.target.name.value;
  const commentInput = event.target.comment.value;

  if (!nameInput || !commentInput) return;

  let newComment = {
    name: nameInput,
    comment: commentInput,
  };

  addConversation(newComment);

  event.target.reset();
});

document.addEventListener("DOMContentLoaded", () => {
  renderConversation();
});
