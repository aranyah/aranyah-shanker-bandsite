
// const conversation = [
//     {
//       name: "Victor Pinto",
//       text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//       date: "11/02/2023",
//     },
//     {
//       name: "Christina Cabrera",
//       text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//       date: "10/28/2023",
//     },
//     {
//       name: "Isaac Tadesse",
//       text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//       date: "10/20/2023",
//     },
//   ];
const API_KEY = "8fd3018e-f075-45f1-b31a-024ab1909a89";   
const bandSiteApi = new BandSiteApi(API_KEY);

const conversationList = document.querySelector(".conversation__list");
const conversationForm = document.querySelector(".conversation-form");


// function will take in an entry as a passed parameter and that entry contains 3 components: image + header (name in h3 and date stamp) + the actual comment === itis an object 
  function createConversationElement(commentObjParam) {

// each list element is a new entry that goes in the conversation__list in html and store within a variable like ListElement then underneath we need to add the css i newly make in .scss to this list element which will mimic the scss of input-container
// new scss class
          const listElement = document.createElement("li");
          listElement.classList.add("conversation__entry");
        
          const avatarDiv = document.createElement("div");
          avatarDiv.classList.add("conversation__avatar");

// new scss class: content is header + comment text          
          const contentDiv = document.createElement("div");
          contentDiv.classList.add("conversation__content");
// new scss class: header is username + date         
          const headerDiv = document.createElement("div");
          headerDiv.classList.add("conversation__header");
        
// new scss class        
          const usernameElement = document.createElement("p");
          usernameElement.classList.add("conversation__username");
          usernameElement.innerText = commentObj.name;
        
// new scss class          
          const dateElement = document.createElement("span");
          dateElement.classList.add("conversation__date");
          dateEl.textContent = comment.date;
        
          const textEl = document.createElement("p");
          textEl.classList.add("conversation__text");
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
    const conversationList = document.querySelector(".conversation__list");
    if (!conversationList) return;
  

    while (conversationList.firstChild) {
      conversationList.removeChild(conversationList.firstChild);
    }
  

    conversation.forEach((comment) => {
      const commentElement = createCommentElement(comment);
      conversationList.appendChild(commentElement);
    });
  }
  

  function initializeForm() {
    const form = document.querySelector(".conversation__form"); 
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
  
      
      conversation.unshift(newComment);
  

      form.reset(); 
  

      renderComments();
    });
  }
  

  document.addEventListener("DOMContentLoaded", () => {
    renderComments();
    initializeForm();
  });
  