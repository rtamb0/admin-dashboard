const projectContainer = document.querySelector('.project-container');

const projectCard = document.createElement('div');
projectCard.classList.add('project-cards');

const projectText = document.createElement('div');
projectText.classList.add('project-text');
projectCard.appendChild(projectText);

const projectTitle = document.createElement('h4');
projectText.appendChild(projectTitle);

const projectStart = document.createElement('p');
projectText.appendChild(projectStart);

const projectFinish = document.createElement('p');
projectText.appendChild(projectFinish);

const projectRating = document.createElement('p');
projectText.appendChild(projectRating);

const projectButtons = document.querySelector('.project-buttons');
projectCard.appendChild(projectButtons);

const newButton = document.querySelector('.header-buttons button:first-child');

newButton.addEventListener('click', () => console.log('test'))