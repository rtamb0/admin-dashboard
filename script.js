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
    let title = prompt("What is the title of the game?");
    projectTitle.textContent = `${title}`;

    const projectStart = document.createElement('p');
    projectText.appendChild(projectStart);
    let projectDateStart = prompt("When did you start the game? Please make sure it is on DD/MM/YYYY format.");
    dateCheckError(projectDateStart);
    projectStart.innerHTML = `<strong>Started:</strong> ${projectDateStart}`;

    const projectFinish = document.createElement('p');
    projectText.appendChild(projectFinish);
    let projectDateEnd = prompt("When did you finish the game? Please make sure it is on DD/MM/YYYY format.");
    dateCheckError(projectDateEnd);
    projectFinish.innerHTML = `<strong>Finished:</strong> ${projectDateEnd}`;

    const projectRating = document.createElement('p');
    projectText.appendChild(projectRating);
};

function dateCheckError(datePrompt) {
    if (datePrompt === undefined) return;
    datePrompt.split('/').forEach((num, i, arr) => {
        if (arr[1] > 12) {
            datePrompt = prompt("Wrong format! Make sure to enter the date like this DD/MM/YYYY.");
        };
    });
    if (datePrompt.length !== 10) {
        while (datePrompt.length !== 10) {
            datePrompt = prompt("Wrong format! Make sure to enter the date like this DD/MM/YYYY.");
        };
    };
};