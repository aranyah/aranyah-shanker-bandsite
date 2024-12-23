// Initial comments data
const comments = [
    {
        name: "Victor Pinto",
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        date: "11/02/2023"
    },
    {
        name: "Christina Cabrera",
        text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        date: "10/28/2023"
    },
    {
        name: "Isaac Tadesse",
        text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        date: "10/20/2023"
    }
];

// Create individual comment element using DOM methods
function createCommentElement(comment) {
    // Create main elements
    const commentEl = document.createElement('li');
    const avatarDiv = document.createElement('div');
    const avatarPlaceholder = document.createElement('div');
    const contentDiv = document.createElement('div');
    const headerDiv = document.createElement('div');
    const nameEl = document.createElement('h3');
    const dateEl = document.createElement('span');
    const textEl = document.createElement('p');

    // Add classes (using BEM)
    commentEl.classList.add('comments__item');
    avatarDiv.classList.add('comments__avatar');
    avatarPlaceholder.classList.add('comments__avatar-image');
    contentDiv.classList.add('comments__content');
    headerDiv.classList.add('comments__header');
    nameEl.classList.add('comments__name');
    dateEl.classList.add('comments__date');
    textEl.classList.add('comments__text');

    // Set content
    nameEl.textContent = comment.name;
    dateEl.textContent = comment.date;
    textEl.textContent = comment.text;

    // Build DOM structure
    headerDiv.appendChild(nameEl);
    headerDiv.appendChild(dateEl);
    contentDiv.appendChild(headerDiv);
    contentDiv.appendChild(textEl);
    avatarDiv.appendChild(avatarPlaceholder);
    commentEl.appendChild(avatarDiv);
    commentEl.appendChild(contentDiv);

    return commentEl;
}

// Render all comments
function renderComments() {
    const commentsList = document.querySelector('.comments__list');
    if (!commentsList) return;

    // Clear existing comments
    while (commentsList.firstChild) {
        commentsList.removeChild(commentsList.firstChild);
    }

    // Add all comments
    comments.forEach(comment => {
        const commentElement = createCommentElement(comment);
        commentsList.appendChild(commentElement);
    });
}

// Form submission handler
function initializeForm() {
    const form = document.querySelector('.form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const commentInput = document.getElementById('comment');

        if (!nameInput || !commentInput) return;

        // Create new comment
        const newComment = {
            name: nameInput.value,
            text: commentInput.value,
            date: new Date().toLocaleDateString()
        };

        // Add to comments array
        comments.unshift(newComment);

        // Clear form
        nameInput.value = '';
        commentInput.value = '';

        // Re-render comments
        renderComments();
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderComments();
    initializeForm();
});