clickableFavButtons();
clickableShareButtons();
clickableWatchButtons();

const notificationButton = document.querySelector('.user-info img:nth-of-type(1)');
hoverableNotification(notificationButton);

const newButton = document.querySelector('.header-buttons button:first-child');
newButton.addEventListener('click', () => {
    newProjectCard();
    clickableFavButtons();
    clickableShareButtons();
    clickableWatchButtons();
});

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

    let projectStatus = prompt("What is the status of the game? Type '1' for Completed, '2' for In Progress, '3' for Not Started.");
    while (projectStatus < 1 || projectStatus > 3) {
        projectStatus = prompt("Wrong value! Make sure to type the according values: '1' for Completed, '2' for In Progress, '3' for Not Started.");
    };
    projectStatusClass(projectStatus, projectCard);

    const projectStart = document.createElement('p');
    projectText.appendChild(projectStart);
    projectCardStartDate(projectStart, projectStatus);

    const projectFinish = document.createElement('p');
    projectText.appendChild(projectFinish);
    projectCardEndDate(projectFinish, projectStatus);

    const projectRating = document.createElement('p');
    projectText.appendChild(projectRating);
    projectRate(projectRating, projectStatus);
};

function dateCheckError(datePrompt) {
    if (datePrompt === '') return "N/A";
    while (datePrompt.match(/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g) === null) {
        datePrompt = prompt("Wrong format! Make sure to enter the date like this DD/MM/YYYY.");
    };
};

function projectCardTitle(node) {
    let title = prompt("What is the title of the game?");
    while (title === '') {
        title = prompt("What is the title of the game?");
    };
    if (title === null) return;
    node.textContent = `${title}`;
};

function projectCardStartDate(node, status) {
    let date;
    if (status === '3') {
        date = "N/A";
    } else {
        date = prompt("When did you start this game? Please make sure to use DD/MM/YYYY format. If you haven't started the game, leave it blank.");
        if (date === null) return;
        dateCheckError(date);
    };
    node.innerHTML = `<strong>Started:</strong> ${date}`;
};

function projectCardEndDate(node, status) {
    let date;
    if (status !== '1') {
        date = "N/A";
    } else {
        date = prompt("When did you finish this game? Please make sure to use DD/MM/YYYY format. If you haven't started the game, leave it blank.");
        if (date === null) return;
        dateCheckError(date);
    };
    node.innerHTML = `<strong>Finished:</strong> ${date}`;
};

function projectRate(node, status) {
    if (status === 3) {
        node.innerHTML = `<strong>Rating:</strong> N/A`
    } else {
        let rating = prompt("What do you rate this game as? Enter a number between 0.1 - 10.");
        if (rating === null) return;
        while (rating < 0.1 || rating > 10) {
            rating = prompt("Only value between 0.1-10 are allowed!");
        };
        node.innerHTML = `<strong>Rating:</strong> ${rating}/10`;
    };
};

function projectStatusClass(status, node) {
    switch (status) {
        case "1":
            node.classList.add('finished');
            break;
        case "2":
            node.classList.add('inprogress');
            break;
        case "3":
            node.classList.add('notstarted');
            break;
    };
};

function clickableFavButtons() {
    const favButtons = document.querySelectorAll('.project-buttons img:nth-child(1)');
    favButtons.forEach((favButton) => {
        favButton.addEventListener('click', () => {
            if (favButton.getAttribute('src')  === 'assets/star.svg') {
                favButton.setAttribute('src', 'assets/star-outline.svg');
            } else {
                favButton.setAttribute('src', 'assets/star.svg');
            };
        });
    });
};

function clickableWatchButtons() {
    const watchButtons = document.querySelectorAll('.project-buttons img:nth-child(2)');
    watchButtons.forEach((watchButton) => {
        watchButton.addEventListener('click', () => {
            if (watchButton.getAttribute('src')  === 'assets/eye-circle.svg') {
                watchButton.setAttribute('src', 'assets/eye-circle-outline.svg');
            } else {
                watchButton.setAttribute('src', 'assets/eye-circle.svg');
            };
        });
    });
};

function clickableShareButtons() {
    const shareButtons = document.querySelectorAll('.project-buttons img:nth-child(3)');
    shareButtons.forEach((shareButton) => {
        shareButton.addEventListener('click', () => {
            if (shareButton.getAttribute('src')  === 'assets/share.svg') {
                shareButton.setAttribute('src', 'assets/share-outline.svg');
            } else {
                shareButton.setAttribute('src', 'assets/share.svg');
            };
        });
    });
};

function hoverableNotification(node) {
    node.addEventListener('mouseover', () => notificationButton.setAttribute('src', 'assets/bell-ring.svg'));
    node.addEventListener('mouseout', () => notificationButton.setAttribute('src', 'assets/bell-ring-outline.svg'));
};