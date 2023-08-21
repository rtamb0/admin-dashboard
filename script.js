const newButton = document.querySelector('.header-buttons button:first-child');

newButton.addEventListener('click', () => newProjectCard())

function newProjectCard() {
    const projectContainer = document.querySelector('.project-container');
    const recentProjectCard = document.querySelector('.project-cards');
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-cards');
    projectContainer.insertBefore(projectCard, recentProjectCard);

    const projectText = document.createElement('div');
    projectText.classList.add('project-text');
    projectCard.appendChild(projectText);

    const projectButtons = document.querySelector('.project-buttons').cloneNode(true);
    projectCard.appendChild(projectButtons);

    const projectTitle = document.createElement('h4');
    projectText.appendChild(projectTitle);

    const projectStart = document.createElement('p');
    projectText.appendChild(projectStart);

    const projectFinish = document.createElement('p');
    projectText.appendChild(projectFinish);

    const projectRating = document.createElement('p');
    projectText.appendChild(projectRating);
};
