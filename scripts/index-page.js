
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
  

  function createCommentElement(comment) {
    const commentEl = document.createElement("li");
    commentEl.classList.add("comments__item");
  
    const avatarDiv = document.createElement("div");
    avatarDiv.classList.add("comments__avatar");

  
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

    avatarDiv.style.backgroundColor = "#E1E1E1";
  
    headerDiv.appendChild(nameEl);
    headerDiv.appendChild(dateEl);
    contentDiv.appendChild(headerDiv);
    contentDiv.appendChild(textEl);
    commentEl.appendChild(avatarDiv);
    commentEl.appendChild(contentDiv);
  
    return commentEl;
  }
  

  function renderComments() {
    const commentsList = document.querySelector(".comments__list");
    if (!commentsList) return;
  

    while (commentsList.firstChild) {
      commentsList.removeChild(commentsList.firstChild);
    }
  

    comments.forEach((comment) => {
      const commentElement = createCommentElement(comment);
      commentsList.appendChild(commentElement);
    });
  }
  

  function initializeForm() {
    const form = document.querySelector(".comments__form"); 
    if (!form) return;
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const nameInput = document.getElementById("name");
      const commentInput = document.getElementById("comment");
  
      if (!nameInput || !commentInput) return;
  

      const newComment = {
        name: nameInput.value,
        text: commentInput.value,
        date: new Date().toLocaleDateString(),
      };
  
      
      comments.unshift(newComment);
  

      form.reset(); 
  

      renderComments();
    });
  }
  

  document.addEventListener("DOMContentLoaded", () => {
    renderComments();
    initializeForm();
  });
  