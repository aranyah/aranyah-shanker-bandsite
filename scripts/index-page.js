// Default comments
const defaultComments = [
    {
      name: "Victor Pinto",
      comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
      date: "11/02/2023"
    },
    {
      name: "Christina Cabrera", 
      comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
      date: "10/28/2023"
    },
    {
      name: "Isaac Tadesse",
      comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
      date: "10/20/2023"
    }
  ];
  
  // Comment creation function
  function createCommentElement(comment) {
    const commentEl = document.createElement('div');
    commentEl.classList.add('comments__item');
    
    const dateObj = new Date();
    const formattedDate = formatDate(comment.date || dateObj);
    
    commentEl.innerHTML = `
      <div class="comments__avatar"></div>
      <div class="comments__content">
        <div class="comments__header">
          <span class="comments__name">${comment.name}</span>
          <span class="comments__date">${formattedDate}</span>
        </div>
        <p class="comments__text">${comment.comment}</p>
      </div>
    `;
    
    return commentEl;
  }
  
  // Date formatting function
  function formatDate(dateInput) {
    const date = new Date(dateInput);
    const today = new Date();
    
    // If date is not a valid date, use today's date
    if (isNaN(date.getTime())) {
      return formatDate(today);
    }
    
    // Format as MM/DD/YYYY
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  }
  
  // Render comments
  function renderComments(comments) {
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = ''; // Clear existing comments
    
    comments.forEach(comment => {
      commentsContainer.appendChild(createCommentElement(comment));
    });
  }
  
  // Handle form submission
  function handleCommentSubmit(event) {
    event.preventDefault();
    
    const nameInput = document.querySelector('.comments__input--name');
    const commentInput = document.querySelector('.comments__input--comment');
    
    if (!nameInput.value || !commentInput.value) {
      alert('Please fill in both name and comment fields');
      return;
    }
    
    const newComment = {
      name: nameInput.value,
      comment: commentInput.value,
      date: new Date()
    };
    
    // Add new comment to the beginning of the array
    defaultComments.unshift(newComment);
    
    // Re-render comments
    renderComments(defaultComments);
    
    // Clear form inputs
    nameInput.value = '';
    commentInput.value = '';
  }
  
  // Initialize page
  document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.querySelector('.comments__form');
    commentForm.addEventListener('submit', handleCommentSubmit);
    
    // Render initial comments
    renderComments(defaultComments);
  });