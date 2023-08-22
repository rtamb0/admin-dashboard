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
    projectCardTitle(projectTitle);

    const projectStart = document.createElement('p');
    projectText.appendChild(projectStart);
    projectCardStartDate(projectStart);

    const projectFinish = document.createElement('p');
    projectText.appendChild(projectFinish);
    projectCardEndDate(projectFinish);

    const projectRating = document.createElement('p');
    projectText.appendChild(projectRating);
};

function dateCheckError(datePrompt) {
    if (datePrompt === '') return "N/A";
    while (datePrompt.match(/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g) === null) {
        datePrompt = prompt("Wrong format! Make sure to enter the date like this DD/MM/YYYY.");
    };
    return datePrompt;
};

function projectCardTitle(node) {
    let title = prompt("What is the title of the game?");
    while (title === '') {
        title = prompt("What is the title of the game?");
    };
    if (title === null) return;
    node.textContent = `${title}`;
};

function projectCardStartDate(node) {
    let date = prompt("When did you start this game? Please make sure to use DD/MM/YYYY format. If you haven't started the game, leave it blank.");
    if (date === null) return;
    date = dateCheckError(date);
    node.innerHTML = `<strong>Started:</strong> ${date}`;
};

function projectCardEndDate(node) {
    let date = prompt("When did you finish this game? Please make sure to use DD/MM/YYYY format. If you haven't started the game, leave it blank.");
    if (date === null) return;
    date = dateCheckError(date);
    node.innerHTML = `<strong>Finished:</strong> ${date}`;
};