let isRunning = true;

function stopWatch() {
    if (isRunning) {
        let timer = document.querySelector('#counter');
        let start = timer.textContent;
        let parsedStart = parseInt(start);
        parsedStart++;
        timer.textContent = parsedStart;
    }
}

setInterval(stopWatch, 1000);

const minusButton = document.querySelector('#minus');
const plusButton = document.querySelector('#plus');
const heartButton = document.querySelector('#heart');
const likesList = document.querySelector('.likes');
const pauseButton = document.querySelector('#pause');
const comments = document.querySelector('#submit');

minusButton.addEventListener('click', decrementTimer);
plusButton.addEventListener('click', incrementTimer);
heartButton.addEventListener('click', likeHeartButton);
pauseButton.addEventListener('click', togglePause);
pauseButton.addEventListener('click', togglePause);
comments.addEventListener('click', commentSubmit);

function decrementTimer() {
    let timer = document.querySelector('#counter');
    let start = timer.textContent;
    let parsedStart = parseInt(start);
    parsedStart--;
    timer.textContent = parsedStart;
}

function incrementTimer() {
    let timer = document.querySelector('#counter');
    let start = timer.textContent;
    let parsedStart = parseInt(start);
    parsedStart++;
    timer.textContent = parsedStart;
}

function likeHeartButton() {
    let timer = document.querySelector('#counter');
    let currentCount = timer.textContent;
    let existingListItem = likesList.querySelector(`[data-count="${currentCount}"]`);

    if (!existingListItem) {
        let newListItem = document.createElement('li');
        newListItem.setAttribute('data-count', currentCount);
        newListItem.setAttribute('data-like-count', 1);
        newListItem.textContent = `${currentCount} has been liked 1 time.`;
        likesList.appendChild(newListItem);
    } else {
        let likeCount = parseInt(existingListItem.getAttribute('data-like-count'));
        likeCount++;
        existingListItem.setAttribute('data-like-count', likeCount);
        existingListItem.textContent = `${currentCount} has been like ${likeCount} times.`;
    }   
}

function togglePause() {
    if (isRunning) {
        isRunning = !isRunning;
        pauseButton.textContent = 'resume';
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
        clearInterval(stopWatch);
    } else {
        pauseButton.textContent = 'pause';
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;
        isRunning = true;
    }
}

function commentSubmit(event) {
    event.preventDefault();
    let newComment = document.createElement('p');
    let commentList = document.querySelector('#list');
    let commentInput = document.querySelector('#comment-input');
    let form = document.querySelector('#comment-form');
    newComment.textContent = commentInput.value;
    commentList.appendChild(newComment);
    form.reset();
}