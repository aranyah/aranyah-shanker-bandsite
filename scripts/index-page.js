// Initial comments data
const comments = [
  {
    name: "Victor Pinto",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    date: "11/02/2023",
  },
  {
    name: "Christina Cabrera",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    date: "10/28/2023",
  },
  {
    name: "Isaac Tadesse",
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    date: "10/20/2023",
  },
];

// Create individual comment element using DOM methods
function createCommentElement(comment) {
  const commentEl = document.createElement("li");
  commentEl.classList.add("comments__item");

  const avatarDiv = document.createElement("div");
  avatarDiv.classList.add("comments__avatar");

  const avatarPlaceholder = document.createElement("div");
  avatarPlaceholder.classList.add("comments__avatar-image");

  const avatarImg = document.createElement("img");
  avatarImg.src = "./assets/images/placeholder.jpg"; // Add your placeholder image path
  avatarImg.alt = "Avatar";
  avatarImg.classList.add("comments__avatar-image");

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("comments__content");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("comments__header");

  const nameEl = document.createElement("h3");
  nameEl.classList.add("comments__name");
  nameEl.textContent = comment.name;

  const dateEl = document.createElement("span");
  dateEl.classList.add("comments__date");
  dateEl.textContent = comment.date;

  const textEl = document.createElement("p");
  textEl.classList.add("comments__text");
  textEl.textContent = comment.text;

  headerDiv.appendChild(nameEl);
  headerDiv.appendChild(dateEl);
  contentDiv.appendChild(headerDiv);
  contentDiv.appendChild(textEl);
  avatarDiv.appendChild(avatarPlaceholder);
  commentEl.appendChild(avatarDiv);
  avatarDiv.appendChild(avatarImg);
  commentEl.appendChild(contentDiv);

  return commentEl;
}

// Render all comments
function renderComments() {
  const commentsList = document.querySelector(".comments__list");
  if (!commentsList) return;

  // Clear existing comments
  while (commentsList.firstChild) {
    commentsList.removeChild(commentsList.firstChild);
  }

  // Add all comments
  comments.forEach((comment) => {
    const commentElement = createCommentElement(comment);
    commentsList.appendChild(commentElement);
  });
}

// Form submission handler
function initializeForm() {
  const form = document.querySelector(".comments__form"); // Updated selector
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const commentInput = document.getElementById("comment");

    if (!nameInput || !commentInput) return;

    // Create new comment
    const newComment = {
      name: nameInput.value,
      text: commentInput.value,
      date: new Date().toLocaleDateString(),
    };

    // Add to comments array
    comments.unshift(newComment);

    // Clear form
    form.reset(); // Using form.reset() instead of individual clears

    // Re-render comments
    renderComments();
  });
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  renderComments();
  initializeForm();
});
