
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
          usernameElement.innerText = commentObjParam.name;
        
// new scss class          
          const dateElement = document.createElement("span");
          dateElement.classList.add("conversation__date");
          dateElement.innerText = new Date(commentObjParam.timestamp).toLocaleDateString();
        
          const textEl = document.createElement("p");
          textEl.classList.add("conversation__text");
          textEl.innerText = commentObjParam.comment;

                                  // avatarDiv.style.backgroundColor = "#E1E1E1";
  
    headerDiv.appendChild(usernameElement);
    headerDiv.appendChild(dateElement);

    contentDiv.appendChild(headerDiv);
    contentDiv.appendChild(textEl);

    listElement.appendChild(avatarDiv);
    listElement.appendChild(contentDiv);
  

    // okay so this adds the entire constructed comment to the conversation list on the page
    conversationList.appendChild(listElement);
  }
  

// make comments live
  async function renderConversation() {
    try {
      conversationList.replaceChildren();
      let commentData = await bandSiteApi.getComments();
      commentData.forEach((commentItem) => {
        createConversationElement(commentItem);
      });
    }catch(error) {
      console.error(error);
    }}

    renderConversation();


async function addConversation(commentObj){
  try {
     await bandSiteApi.postComment(commentObj);
    conversationList.replaceChildren();
    renderConversation();


  }catch(error) {
    console.error(error);
  }}



  
    conversationForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const nameInput = event.target.name.value;
      const commentInput = event.target.comment.value;
  
      if (!nameInput || !commentInput) return;
  

      let newComment = {
        name: nameInput,
        comment: commentInput
      };
  
      
      addConversation(newComment);
  

      event.target.reset(); 
  

      
    });
  
  

  document.addEventListener("DOMContentLoaded", () => {
    renderConversation();
   
  });
  